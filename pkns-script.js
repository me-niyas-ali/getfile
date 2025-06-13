  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const toggleBtn = document.getElementById('sidebarToggle');
  const closeBtn = document.getElementById('closeSidebar');

  // Show sidebar and overlay
  toggleBtn.addEventListener('click', () => {
   sidebar.classList.add('show');
   overlay.classList.add('show');
  });

  // Hide sidebar and overlay
  function hideSidebar() {
   sidebar.classList.remove('show');
   overlay.classList.remove('show');
  }

  closeBtn.addEventListener('click', hideSidebar);
  overlay.addEventListener('click', hideSidebar);

  // Dark mode toggle
  const html = document.documentElement;
  const darkToggle = document.getElementById('darkModeToggle');

  darkToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-bs-theme') === 'dark';
  html.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
  darkToggle.innerHTML = isDark
    ? '<i class="bi bi-moon-fill"></i>'
    : '<i class="bi bi-sun-fill"></i>';
});

  // Scroll to top functionality
  document.getElementById('scrollToTopBtn').addEventListener('click', () => {
   window.scrollTo({
    top: 0, behavior: 'smooth'
   });
  });

  // Loader animation
  function startSlideProgress(index) {
   document.querySelectorAll('.slide-bar').forEach((bar, i) => {
    bar.style.width = '0%';
    if (i === index) {
     // Trigger progress animation
     setTimeout(() => {
      bar.style.width = '100%';
     }); // slight delay to apply transition
    }
   });
  }

  window.addEventListener('DOMContentLoaded', () => {
   const loader = document.getElementById('loader');
   const bar = document.getElementById('progressBar');

   // Animate loader progress bar in stages
   bar.style.width = '10%';
   setTimeout(() => {
    bar.style.width = '45%';
   }, 950);
   setTimeout(() => {
    bar.style.width = '55%';
   }, 1150);
   setTimeout(() => {
    bar.style.width = '68%';
   }, 1200);
   setTimeout(() => {
    bar.style.width = '74%';
   }, 1250);
   setTimeout(() => {
    bar.style.width = '100%';
   }, 3000);

   // After loader completes, start carousel and progress bar
   setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => {
     loader.remove();
     const carouselEl = document.querySelector('#mainCarousel');
     const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl);
     carousel.cycle(); // Start carousel

     // Start progress bar for first slide
     startSlideProgress(0);

     // Update progress bar on slide event
     carouselEl.addEventListener('slid.bs.carousel', (e) => {
      startSlideProgress(e.to);
     });
    }, 500);
   }, 4000);
  });
