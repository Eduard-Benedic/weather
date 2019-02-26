// Init Storage
const storage = new Storage();

// Get stored Location Data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

const ui = new UI();

// Get Weather on DOM Load

document.addEventListener("DOMContentLoaded", getWeather);

// Change Location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  // Change Location
  weather.changeLocation(city, country);

  // Set Location in LS
  storage.setLocationData(city, country);

  getWeather();

  // Close Modal

  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
