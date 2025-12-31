function showLoading() {
document.getElementById("status").textContent = "Loading weather data...";}
function showError(message) {
document.getElementById("status").textContent = message;}
function updateWeatherUI(data) {
document.getElementById("status").textContent = "";
document.getElementById("city").textContent = data.name;
document.getElementById("temperature").textContent =
`${Math.round(data.main.temp)}°C`;
document.getElementById("description").textContent =
data.weather[0].description;
document.getElementById("humidity").textContent =
`Humidity: ${data.main.humidity}%`; 
document.getElementById("wind").textContent =
`Wind: ${data.wind.speed} m/s`;
updateWeatherIcon(data.weather[0].main);
updateBackground(data.weather[0].main);}
function updateWeatherIcon(condition) {
const icon = document.getElementById("weatherIcon");
if (condition === "Clear") icon.src = "icons/sun.png";
else if (condition === "Rain") icon.src = "icons/rain.png";
else if (condition === "Clouds") icon.src = "icons/cloud.png";
else if (condition === "Snow") icon.src = "icons/snow.png";
else icon.src = "icons/default.png";}
function updateBackground(condition) {
const body = document.body;
if (condition === "Clear") body.style.backgroundColor = "#87CEEB";
else if (condition === "Rain") body.style.backgroundColor = "#5F9EA0";
else if (condition === "Clouds") body.style.backgroundColor = "#B0C4DE";
else body.style.backgroundColor = "#ddd";}

