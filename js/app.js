document.getElementById("attacker-button").click();


function openAttackerTab() {
  document.getElementById("defender-button").classList.remove("active");
  document.getElementById("attacker-button").classList.add("active");
  document.getElementById("defender-content").style.display = "none";
  document.getElementById("attacker-content").style.display = "block";
}

function openDefenderTab() {
  document.getElementById("attacker-button").classList.remove("active");
  document.getElementById("defender-button").classList.add("active");
  document.getElementById("attacker-content").style.display = "none";
  document.getElementById("defender-content").style.display = "block";
}