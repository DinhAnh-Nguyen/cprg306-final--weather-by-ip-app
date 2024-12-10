

export const fetchWeatherByIP = async (ip) => {
    const weather_api_key = process.env.WEATHERSTACK_API_KEY;

    const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${"e259eda57f48d2f35952797af8c65e52"}&query=${ip}`
    );
    const data = await response.json();

    if (data.error) {
        throw new Error(data.error.info);
    }

    return data;
};
