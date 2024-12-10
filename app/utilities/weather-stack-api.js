// Fetch weather data from user's IP
// The API key is secured inside the .env.local
// Create a data value to hold the .json value
// Return data
export const fetchWeatherByIP = async (ip) => {
    const weather_api_key = process.env.WEATHERSTACK_API_KEY;

    const response = await fetch(
        `https://api.weatherstack.com/current?access_key=${weather_api_key}&query=${ip}`
    );
    const data = await response.json();

    if (data.error) {
        throw new Error(data.error.info);
    }

    return data;
};
