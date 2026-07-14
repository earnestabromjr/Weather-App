import "./styles.css";
import { displayWeather } from "./display";

// const apiKey = process.env.WEATHER_API_KEY;
// const searchForm = document.getElementById("search-form");
const searchButton = document.querySelector("button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("submit", async (event) => {
	event.preventDefault();
	const city = searchInput.value;
	await displayWeather(city);
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
	const weather = document.getElementById("weather");
	weather.innerHTML = "";
	searchInput.value = "";
});

