# 📜 WEATHER APP CONTRACTS

## 🏗️ HTML CONTRACT

### REQUIRED IDs (EXACT SPELLING):

1. #city-input - Search input field
2. #search-btn - Search button
3. #city-name - City name display
4. #temperature - Temperature display
5. #humidity - Humidity display
6. #wind-speed - Wind speed display
7. #weather-icon - Icon container
8. #weather-condition - Weather condition text
9. #loading - Loading message container
10. #error-message - Error message container

### REQUIRED CLASSES:
- .weather-card - Main weather card
- .search-area - Search bar container
- .temp - Temperature styling
- .details - Humidity/Wind container

## 🎨 CSS CONTRACT

### BACKGROUND CLASSES (for JS to toggle):
- .bg-sunny - Sunny weather
- .bg-rainy - Rainy weather  
- .bg-cloudy - Cloudy weather
- .bg-night - Night time

### UTILITY CLASSES:
- .hidden - Hide element (display: none)
- .visible - Show element (display: block)

## 🔌 JS CONTRACT

### API MODULE (api.js)
```javascript
// MUST HAVE THIS FUNCTION:
async function getWeather(city) {
    // Returns: Promise<WeatherData | Error>
}

// WeatherData structure:
{
    city: string,
    temperature: number,
    humidity: number,
    windSpeed: number,
    condition: string,
    iconKey: string
}