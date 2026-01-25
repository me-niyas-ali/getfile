const email = 'example@email.com';
const buttons = document.querySelectorAll('.copy-email');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
      const originalHTML = button.innerHTML;
      button.innerHTML = '<i class="bi bi-check2 m-1"></i> Copied!';
      setTimeout(() => {
        button.innerHTML = originalHTML;
      }, 1500);
    });
  });
});
