import { showConditions } from "./weather";

export const displayWeather = async (location) => {
	const appMain = document.querySelector("#app");
	const displayWeather = document.querySelector("#weather");
	displayWeather.innerHTML = "";
	try {
		const conditions = await showConditions();
		for (const [key, value] of Object.entries(conditions)) {
			const li = document.createElement("li");
			li.textContent = `${key}: ${value}`;
			displayWeather.appendChild(li);
		}
	} catch (error) {
		console.log(error);
		displayWeather.innerHTML = error.message;
	}
};
