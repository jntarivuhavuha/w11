function windChill(t, s) {
  // Processing
  if (t > 50 || s < 3)
  {
      chill = "N/A";
  }
  else
  {
      chill = Math.round(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));
      chill = chill  + "°F";
  }

  // Output
  document.getElementById('wchill').innerHTML = chill;
}