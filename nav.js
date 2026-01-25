      $(document).ready(function() {
        $('#homeBtn').addClass('active-btn');
      });
      $('#homeBtn').click(function() {
        $('.nav-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('#main').delay(200).fadeIn(500);
        $('#mainProfileCard').fadeOut(400);
        $('#mainProjectsCard').fadeOut(400);
      });
      $('#profileBtn').click(function() {
        $('.nav-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('#main').fadeOut(400);
        $('#mainProjectsCard').fadeOut(400);
        $('#mainProfileCard').delay(200).fadeIn(500);
      });
      $('.projectsBtn').click(function() {
        $('.nav-btn').removeClass('active-btn');
        $('#projectsBtn').addClass('active-btn');
        $('#main').fadeOut(400);
        $('#mainProfileCard').fadeOut(500);
        $('#mainProjectsCard').delay(200).fadeIn(500);
      });
