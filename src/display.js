import { showConditions } from "./weather";

export const displayWeather = () => {
	const appMain = document.querySelector("#app");
	const displayWeather = document.querySelector("#weather");
	const conditions = showConditions();
	for (const [key, value] of Object.entries(conditions)) {
		const li = document.createElement("li");
		li.textContent = `${key}: ${value}`;
		displayWeather.appendChild(li);
	}
	appMain.appendChild(displayWeather);
};
