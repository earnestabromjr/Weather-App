import "./styles.css";
import { getWeather, showConditions } from "./weather.js";

const baseUrl =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const apiKey = "NXM6AE9X7YT4X22T94BU7547V";
const searchForm = document.getElementById("search-form");
const searchButton = document.querySelector("button");

searchButton.addEventListener("click", () => {
  const searchInput = document.getElementById("search-input");
  const city = searchInput.value;
  const searchCity = city.replace(/\s/g, "");
  console.log(searchCity);
  console.log(city);
});

// const requestUrl = `${baseUrl}/${city}?unitGroup=us&key=${apiKey}&contentType=json&startDate=today`;

// showConditions("Jasper,AL");
