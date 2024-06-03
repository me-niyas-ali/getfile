      document.addEventListener("DOMContentLoaded", function() {
        const openButtons = document.querySelectorAll('.openBtn');
        const closeButtons = document.querySelectorAll('.closeBtn');
        const modals = document.querySelectorAll('.modal');
        openButtons.forEach(button => {
          button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const modal = document.getElementById(target);
            modal.style.display = 'block';
          });
        });
        closeButtons.forEach(button => {
          button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const modal = document.getElementById(target);
            modal.style.display = 'none';
          });
        });
        window.onclick = function(event) {
          modals.forEach(modal => {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          });
        };
      });
