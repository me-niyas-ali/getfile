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
  // Match 5
  setTextContent("match5", "Match Name");
    setTextContent("team9", "Text for team 9");
    setTextContent("team10", "Text for team 10");
    setTextContent("time5", "10:35PM IST | 10:00PM GST | 10:00PM AST");
  // Match 6
  setTextContent("match6", "Match Name");
    setTextContent("team11", "Text for team 11");
    setTextContent("team12", "Text for team 12");
    setTextContent("time6", "10:35PM IST | 10:00PM GST | 10:00PM AST");
  // Match 7
  setTextContent("match7", "Match Name");
    setTextContent("team13", "Text for team 13");
    setTextContent("team14", "Text for team 14");
    setTextContent("time7", "10:35PM IST | 10:00PM GST | 10:00PM AST");
  // Match 8
  setTextContent("match8", "Match Name");
    setTextContent("team15", "Text for team 15");
    setTextContent("team16", "Text for team 16");
    setTextContent("time8", "10:40PM IST | 10:00PM GST | 10:00PM AST");

    setTeamLogoSrc("team1-logo", "https://banner2.cleanpng.com/20180718/a/kisspng-brazil-national-football-team-2014-fifa-world-cup-camisa-brasil-5b4f1a28b2c693.9926342415319106967323.jpg");
    setTeamLogoSrc("team2-logo", "https://www.uaefa.ae/api/public/img/logo/e8cb1894e09541c690a69ad547fef0c5.png");
    setTeamLogoSrc("team3-logo", "https://static.toiimg.com/thumb/msid-77700605,width-400,resizemode-4/77700605.jpg");
    setTeamLogoSrc("team4-logo", "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png");
    setTeamLogoSrc("team5-logo", "team5-logo.jpg");
    setTeamLogoSrc("team6-logo", "team6-logo.jpg");
    setTeamLogoSrc("team7-logo", "team7-logo.jpg");
    setTeamLogoSrc("team8-logo", "team8-logo.jpg");
    
