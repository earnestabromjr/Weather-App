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
	await displayWeather(city);
	console.log(city);
	console.log(city);
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
	const searchInput = document.getElementById("search-input");
	const weather = document.getElementById("weather");
	if (weather.children.length != 0) {
		for (const li of weather.children) {
			li.remove();
		}
	}
	searchInput.value = "";
});

// const requestUrl = `${baseUrl}/${city}?unitGroup=us&key=${apiKey}&contentType=json&startDate=today`;

// showConditions("Jasper,AL");
