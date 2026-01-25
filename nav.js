jQuery(document).ready(function() {
        jQuery('#homeBtn').addClass('active-btn');
      });
      jQuery('#homeBtn').click(function() {
        jQuery('.nav-btn').removeClass('active-btn');
        jQuery(this).addClass('active-btn');
        jQuery('#main').delay(200).fadeIn(500);
        jQuery('#mainProfileCard').fadeOut(400);
        jQuery('#mainProjectsCard').fadeOut(400);
      });
      jQuery('#profileBtn').click(function() {
        jQuery('.nav-btn').removeClass('active-btn');
        jQuery(this).addClass('active-btn');
        jQuery('#main').fadeOut(400);
        jQuery('#mainProjectsCard').fadeOut(400);
        jQuery('#mainProfileCard').delay(200).fadeIn(500);
      });
      jQuery('.projectsBtn').click(function() {
        jQuery('.nav-btn').removeClass('active-btn');
        jQuery('#projectsBtn').addClass('active-btn');
        jQuery('#main').fadeOut(400);
        jQuery('#mainProfileCard').fadeOut(500);
        jQuery('#mainProjectsCard').delay(200).fadeIn(500);
      });
