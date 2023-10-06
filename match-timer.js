const targetDates = [
        new Date('2023-10-08T20:30:00').getTime(),
        new Date('2023-10-07T20:00:10').getTime(),
        new Date('2023-10-07T15:03:00').getTime(),
        new Date('2023-10-07T12:53:00').getTime()
      ];

function updateTimers() {
  const now = new Date().getTime();
  for (let i = 0; i < targetDates.length; i++) {
    const timeLeft = targetDates[i] - now;
    const timerElement = document.getElementById(`timer${i + 1}`);
    const buttonElement = document.getElementById(`button${i + 1}`);
    if (timeLeft <= 0) {
      if (timeLeft > -5400000) {
        timerElement.innerHTML = "On Live â—";
        timerElement.classList.add("blinking"); // Add the "blinking" class
        buttonElement.classList.remove("disabled");
      } else {
        timerElement.innerHTML = "Match Ended";
        timerElement.classList.remove("blinking"); // Remove the "blinking" class
        buttonElement.classList.add("disabled");
      }
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }
}

// Call the updateTimers() function to start the timer and check for updates
setInterval(updateTimers, 1000);
updateTimers();
