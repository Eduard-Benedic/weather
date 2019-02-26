class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.details = document.getElementById("w-details");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.windSpeed = document.getElementById("w-wind-speed");
    this.deg = document.getElementById("w-deg");
  }

  paint(weather) {
    this.location.textContent = `${weather.sys.country}, ${weather.name}`;
    this.desc.textContent = weather.weather[0].description.toUpperCase();
    this.string.textContent = `${weather.main.temp} F`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} kPa`;
    this.windSpeed.textContent = `Wind speed: ${weather.wind.speed} mph`;
    this.deg.textContent = `${weather.wind.deg} deg`;
  }
}
