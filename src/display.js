import { showConditions } from "./weather";

export const displayWeather = () => {
	const appMain = document.querySelector("#app");
	const displayWeather = document.querySelector("#weather");
	displayWeather.textContent = { ...showConditions() };
	appMain.appendChild(displayWeather);
};
