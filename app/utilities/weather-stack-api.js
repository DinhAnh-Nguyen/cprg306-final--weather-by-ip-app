const WEATHERSTACK_API_KEY = "e259eda57f48d2f35952797af8c65e52";

export const fetchWeatherByIP = async (ip) => {
    const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${ip}`
    );
    const data = await response.json();

    if (data.error) {
        throw new Error(data.error.info);
    }

    return data;
};
