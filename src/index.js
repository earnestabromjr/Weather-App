import "./styles.css";
import { displayWeather } from "./display";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", async (event) => {
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

