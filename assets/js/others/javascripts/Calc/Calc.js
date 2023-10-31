function calculateSpeed() {
  const distanceInMeters = parseFloat(
    document.getElementById("distance").value
  );
  const timeInMinutes = parseFloat(document.getElementById("time").value);
  const timeInHours = timeInMinutes / 60;
  const distanceInKilometers = distanceInMeters / 1000;
  const speed = distanceInKilometers / timeInHours;

  document.getElementById(
    "speed-output"
  ).innerHTML = `Velocidad: ${speed.toFixed(2)} km/h`;
}
