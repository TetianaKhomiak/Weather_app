"use strict";

function updateWeatherData(response) {
  let temp = document.querySelector(".current-temperature-value");
  temp.innerHTML = Math.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let valueInput =
    searchInputElement.value.charAt(0).toUpperCase() +
    searchInputElement.value.slice(1).toLowerCase();
  cityElement.innerHTML = valueInput;

  let apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&appid=82ab0a2aa3df9613f110332cc0bfe286&units=metric`;

  axios.get(apiKey).then(updateWeatherData);
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
