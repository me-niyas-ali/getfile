    // Function to safely set text content of an element if it exists.
    function setTextContent(id, text) {
      var element = document.getElementById(id);
      if (element) {
        element.textContent = text;
      }
    }

    // Function to set the src attribute of an <img> element if it exists.
    function setTeamLogoSrc(id, src) {
      var imgElement = document.getElementById(id);
      if (imgElement) {
        imgElement.src = src;
      }
    }

    // Insert text and set team logos using the functions.
        // Insert text into the eight <p> elements using the function.
  // Match 1
  setTextContent("match1", "Match Name");
    setTextContent("team1", "Text for team1");
    setTextContent("team2", "Text for team 2");
    setTextContent("time1", "10:35PM IST | 10:00PM GST | 10:00PM AST");
  // Match 2
  setTextContent("match2", "Match Name");
    setTextContent("team3", "Text for team 3");
    setTextContent("team4", "Text for team 4");
    setTextContent("time2", "10:35PM IST | 10:00PM GST | 10:00PM AST");
  // Match 3
  setTextContent("match3", "Match Name");
    setTextContent("team5", "Text for team 5");
    setTextContent("team6", "Text for team 6");
    setTextContent("time3", "10:35PM IST | 10:00PM GST | 10:00PM AST");
  // Match 4
  setTextContent("match4", "Match Name");
    setTextContent("team7", "Text for team 7");
    setTextContent("team8", "Text for team 8");
    setTextContent("time4", "10:35PM IST | 10:00PM GST | 10:00PM AST");

    setTeamLogoSrc("team1-logo", "https://logowik.com/content/uploads/images/brazil-national-football-team1330.logowik.com.webp");
    setTeamLogoSrc("team2-logo", "team2-logo.jpg");
    setTeamLogoSrc("team3-logo", "team3-logo.jpg");
    setTeamLogoSrc("team4-logo", "team4-logo.jpg");
    setTeamLogoSrc("team5-logo", "team5-logo.jpg");
    setTeamLogoSrc("team6-logo", "team6-logo.jpg");
    setTeamLogoSrc("team7-logo", "team7-logo.jpg");
    setTeamLogoSrc("team8-logo", "team8-logo.jpg");
    
