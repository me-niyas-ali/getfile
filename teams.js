
    // Function to safely set text content of an element if it exists.
    function setTextContent(id, text) {
      var element = document.getElementById(id);
      if (element) {
        element.textContent = text;
      }
    }

    // Insert text into the eight <p> elements using the function.
    setTextContent("team1", "Text for team 1");
    setTextContent("team2", "Text for team 2");
    setTextContent("team3", "Text for team 3");
    setTextContent("team4", "Text for team 4");
    setTextContent("team5", "Text for team 5");
    setTextContent("team6", "Text for team 6");
    setTextContent("team7", "Text for team 7");
    setTextContent("team8", "Text for team 8");
