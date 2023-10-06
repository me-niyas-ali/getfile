// Get references to the eight <p> elements by their IDs.
    var team1 = document.getElementById("team1");
    var team2 = document.getElementById("team2");
    var team3 = document.getElementById("team3");
    var team4 = document.getElementById("team4");
    var team5 = document.getElementById("team5");
    var team6 = document.getElementById("team6");
    var team7 = document.getElementById("team7");
    var team8 = document.getElementById("team8");

    // Check if the elements exist before manipulating them.
    if (team1 && team2 && team3 && team4 && team5 && team6 && team7 && team8) {
      // Insert text into the eight <p> elements.
      team1.textContent = "Text for team 1";
      team2.textContent = "Text for team 2";
      team3.textContent = "Text for team 3";
      team4.textContent = "Text for team 4";
      team5.textContent = "Text for team 5";
      team6.textContent = "Text for team 6";
      team7.textContent = "Text for team 7";
      team8.textContent = "Text for team 8";
    }
