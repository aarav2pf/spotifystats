import { artists } from './data.js';
import { formatNumber, randomListeners } from './utils.js';

function compareArtists() {
  const artist1 = document.getElementById("artist1").value.trim();
  const artist2 = document.getElementById("artist2").value.trim();

  if (!artist1 || !artist2) {
    alert("Please enter both artist names!");
    return;
  }

  const data1 = artists[artist1] || {
    listeners: randomListeners(),
    topCity: "Unknown",
    genre: "Unknown"
  };

  const data2 = artists[artist2] || {
    listeners: randomListeners(),
    topCity: "Unknown",
    genre: "Unknown"
  };

  const resultHTML = `
    <table border="1" cellspacing="0" cellpadding="8" style="margin:auto;">
      <tr><th>Stat</th><th>${artist1}</th><th>${artist2}</th></tr>
      <tr><td>Monthly Listeners</td><td>${formatNumber(data1.listeners)}</td><td>${formatNumber(data2.listeners)}</td></tr>
      <tr><td>Top City</td><td>${data1.topCity}</td><td>${data2.topCity}</td></tr>
      <tr><td>Genre</td><td>${data1.genre}</td><td>${data2.genre}</td></tr>
    </table>
  `;

  document.getElementById("result").innerHTML = resultHTML;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("compareBtn").addEventListener("click", compareArtists);
document.getElementById("closeBtn").addEventListener("click", closePopup);
