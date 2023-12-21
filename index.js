function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = temperature;
  let searchInputElement = document.querySelector("#search-input");
  searchInputElement.value = "";
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82ab0a2aa3df9613f110332cc0bfe286&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
