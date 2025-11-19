import "./styles.css";
import { displayWeather } from "./display";
import { parseLocation } from "./utils";

const apiKey = "NXM6AE9X7YT4X22T94BU7547V";
const searchForm = document.getElementById("search-form");
const searchButton = document.querySelector("button");

searchButton.addEventListener("click", async (event) => {
	event.preventDefault();
	const searchInput = document.getElementById("search-input");
	const city = searchInput.value;
	const searchCity = parseLocation(city);
	await displayWeather(searchCity.city);
	console.log(searchCity.city);
	console.log(city);
});

// const requestUrl = `${baseUrl}/${city}?unitGroup=us&key=${apiKey}&contentType=json&startDate=today`;

// showConditions("Jasper,AL");
