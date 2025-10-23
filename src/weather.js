export async function getWeather(location) {
  const apiKey = "NXM6AE9X7YT4X22T94BU7547V";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}&contentType=json`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function showConditions(location) {
  const data = await getWeather(location);

  // Access the first day's current conditions
  const today = data.days[0];
  console.log(today.temp);

  console.log("Temperature:", today.temp);
  console.log("Feels like:", today.feelslike);
  console.log("Humidity:", today.humidity);
  console.log("Summary:", today.conditions);
}
