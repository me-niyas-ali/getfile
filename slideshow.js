// Initialize variables
  var myIndex = 0;
  var slideshowInterval;

  // Start the slideshow
  carousel();

  function carousel() {
    var x = document.getElementsByClassName("mySlides");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    slideshowInterval = setTimeout(carousel, 2500); // Resume the slideshow
  }

  // Pause the slideshow on hover
  var slideshowContainer = document.querySelector(".slideshow");
  slideshowContainer.addEventListener("mouseenter", function () {
    clearTimeout(slideshowInterval); // Pause the slideshow
  });

  slideshowContainer.addEventListener("mouseleave", function () {
    carousel(); // Resume the slideshow
  });
