document.getElementById("defaultOpen").click();


function openCity(evt, cityName) {
    var i, fleetTabContent, fleetTabLinks;
    fleetTabContent = document.getElementsByClassName("fleet-tab-content");
    for (i = 0; i < fleetTabContent.length; i++) {
      fleetTabContent[i].style.display = "none";
    }
  
    fleetTabLinks = document.getElementsByClassName("fleet-tab-links");
    for (i = 0; i < fleetTabLinks.length; i++) {
      fleetTabLinks[i].className = fleetTabLinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }