async function getWeather(location) {
	const apiKey = process.env.WEATHER_API_KEY;
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}&contentType=json`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Weather API error: ${response.status} ${response.statusText}`);
	}
	const data = await response.json();
	return data;
}

export async function showConditions(location) {
	let data;
	try {
		data = await getWeather(location);
	} catch (error) {
		throw new Error(`Failed to fetch weather for ${location}: ${error.message}`);
	}

	const today = data.days?.[0];
	if (!today) throw new Error("No forecast data available for this location");

	return {
		temperature: today.temp,
		feelsLike: today.feelslike,
		humidity: today.humidity,
		conditions: today.conditions,
	};
}
