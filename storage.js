class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = "London";
    this.defaultCountry = "UK";
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("Country") === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem("Country");
    }

    return {
      city: this.city,
      country: this.country
    };
  }

  setLocationData(city, country) {
    localStorage.setItem("city", city);
    localStorage.setItem("Country", country);
  }
}
