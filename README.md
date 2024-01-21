# Weather App

This is a simple weather web application that allows users to check the current weather of a city. The application displays temperature, feels-like temperature, humidity, wind speed, and other details.

## Features

- **Search:** Enter the city name in the search bar and click the search button to get the weather details.
- **Error Handling:** If an invalid city name is entered, an error message is displayed.
- **Weather Icons:** Animated weather icons indicate the current weather conditions.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Open `index.html` in a web browser.

## Usage

1. Enter the desired city name in the search input.
2. Click the search button to retrieve and display the weather information.

## Dependencies

- None

## API Key

The application uses the OpenWeatherMap API. Make sure to replace the placeholder API key in the `script.js` file with your own key. You can obtain a key by signing up on the [OpenWeatherMap website](https://openweathermap.org/).

```javascript
const apiKey = "your-api-key";
