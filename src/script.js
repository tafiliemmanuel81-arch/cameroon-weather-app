/**
 * =================================================================
 * MEMBER 5: WEEK 1 WORK AREAS - CAPTURE INPUT & CALL MOCK API
 * =================================================================
 * 
 * INSTRUCTIONS:
 * 1. ONLY work in the areas marked with "YOUR WEEK 1 WORK STARTS HERE"
 * 2. DO NOT modify anything outside those areas
 * 3. Follow the step-by-step tasks below each marker
 * 
 * WEEK 1 OBJECTIVE: Capture input and call mock API functions
 * =================================================================
 */

// ====================
// DOM ELEMENTS (from Member 1's HTML)
// ====================
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const weatherContainer = document.getElementById('weather-container');
const loadingIndicator = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const retryButton = document.getElementById('retry-button'); // ADDED

// ====================
// MOCK FUNCTIONS (replace with real ones later)
// ====================

/**
 * Mock API function (Replace with Member 3's getWeather())
 */
async function mockGetWeather(city) {
    console.log(`mockGetWeather called for city: ${city}`);
    
    // Simulate API delay (1-2 seconds)
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    // Return different fake data based on the city name
    let weatherData;
    
    if (city.toLowerCase() === "douala") {
        weatherData = {
            temperature: "31°C",
            condition: "Sunny",
            humidity: "75%",
            windSpeed: "12 km/h"
        };
    } else if (city.toLowerCase() === "yaounde") {
        weatherData = {
            temperature: "24°C",
            condition: "Partly Cloudy",
            humidity: "68%",
            windSpeed: "8 km/h"
        };
    } else if (city.toLowerCase() === "bamenda") {
        weatherData = {
            temperature: "18°C",
            condition: "Rain",
            humidity: "82%",
            windSpeed: "5 km/h"
        };
    } else {
        weatherData = {
            temperature: "22°C",
            condition: "Clear",
            humidity: "65%",
            windSpeed: "10 km/h"
        };
    }
    
    return weatherData;
}

/**
 * Mock UI update (Replace with Member 4's updateUI())
 */
function mockUpdateUI(data) {
    console.log("Updating UI with data:", data);
    
    // Get the city name from input
    const city = searchInput.value.trim();
    
    // Update all HTML elements with the data
    document.getElementById('city-name').textContent = city || "Unknown City";
    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('humidity').textContent = data.humidity;
    document.getElementById('wind-speed').textContent = data.windSpeed;
    document.getElementById('condition').textContent = `Condition: ${data.condition}`; // FIXED
    
    // Set weather icon based on condition
    const weatherIcon = document.getElementById('weather-icon');
    
    // Using emoji instead of CSS classes since we don't have Weather Icons
    if (data.condition.includes("Cloudy")) {
        weatherIcon.textContent = "☁️";
    } else if (data.condition.includes("Sunny")) {
        weatherIcon.textContent = "☀️";
    } else if (data.condition.includes("Clear")) {
        weatherIcon.textContent = "☀️";
    } else if (data.condition.includes("Rain")) {
        weatherIcon.textContent = "🌧️";
    } else {
        weatherIcon.textContent = "☀️";
    }
    
    // Change the body class based on weather condition
    document.body.className = '';
    if (data.condition.includes("Sunny")) {
        document.body.classList.add('sunny');
    } else if (data.condition.includes("Cloudy")) {
        document.body.classList.add('cloudy');
    } else if (data.condition.includes("Rain")) {
        document.body.classList.add('rainy');
    } else {
        document.body.classList.add('clear');
    }
}

/**
 * Loading and error control functions
 */
function showLoading() {
    console.log("Showing loading indicator");
    loadingIndicator.style.display = 'block';
    errorMessage.style.display = 'none';
    weatherContainer.style.display = 'none'; // Hide weather during loading
}

function hideLoading() {
    console.log("Hiding loading indicator");
    loadingIndicator.style.display = 'none';
    weatherContainer.style.display = 'block'; // Show weather after loading
}

function showError(msg) {
    console.log("Showing error:", msg);
    loadingIndicator.style.display = 'none';
    errorMessage.style.display = 'block';
    weatherContainer.style.display = 'none'; // Hide weather on error
    document.getElementById('error-text').textContent = msg;
}

/**
 * Handles the search process
 */
async function handleSearch() {
    // Get the city value from searchInput
    const city = searchInput.value.trim();
    
    // If empty, call showError() with message
    if (!city) {
        showError("Please enter a city name");
        return;
    }
    
    // If not empty:
    try {
        showLoading();
        
        // Call mockGetWeather(city) with await
        const weatherData = await mockGetWeather(city);
        
        // Call mockUpdateUI() with the result
        mockUpdateUI(weatherData);
        
        // Call hideLoading()
        hideLoading();
    } catch (error) {
        // Handle any errors
        showError("Failed to fetch weather data. Please try again.");
        console.error("Error in handleSearch:", error);
    }
}

/**
 * Validates input and triggers search on Enter key
 */
function handleKeyPress(event) {
    // Check if event.key is "Enter"
    if (event.key === "Enter") {
        // If yes, call handleSearch()
        handleSearch();
    }
}

/**
 * Handles retry button click
 */
function handleRetry() {
    handleSearch();
}

// ====================
// EVENT LISTENERS
// ====================
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', handleKeyPress);
retryButton.addEventListener('click', handleRetry); // ADDED

// ====================
// INITIALIZATION
// ====================
console.log("Weather App script loaded successfully!");

// Hide weather container initially
weatherContainer.style.display = 'none';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Set default city in search input
    searchInput.value = "Douala";
    
    // Show initial weather
    handleSearch();
});



