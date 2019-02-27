class Weather {
  constructor(city, country) {
    this.apiKey = "448f9d1e2d2563f9585f5f1cda24b812";
    this.city = city;
    this.country = country;
  }

  // Fetch Weather from API

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&APPID=${this.apiKey}`
    );

    const responseData = await response.json();
    return responseData;
  }

  // Change Weather Location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
