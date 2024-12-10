export default function WeatherDisplay({ weather }) {
    return (
        <div className="p-6 bg-blue-100 rounded-lg shadow-md text-center">
            <h1 className="text-2xl font-bold">{`Weather in ${weather.location.name}, ${weather.location.country}`}</h1>
            <p className="text-lg mt-2">{weather.current.weather_descriptions[0]}</p>
            <p className="mt-2">
                <strong>Temperature:</strong> {weather.current.temperature}°C
            </p>
            <p>
                <strong>Feels Like:</strong> {weather.current.feelslike}°C
            </p>
            <img
                src={weather.current.weather_icons[0]}
                alt="Weather Icon"
                className="inline-block mt-4"
            />
        </div>
    );
}
