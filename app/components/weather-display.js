export default function WeatherDisplay({ weather }) {
    const { location, current } = weather;

    return (
        <div className="p-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-md text-white w-full max-w-md mx-auto">
            {/* Location */}
            <div className="text-center">
                <h1 className="text-3xl font-semibold">{location.name}, {location.country}</h1>
                <p className="text-sm mt-1">{`Last updated: ${current.observation_time}`}</p>
            </div>

            {/* Weather Icon and Temperature */}
            <div className="flex items-center justify-center mt-6">
                <img
                    src={current.weather_icons[0]}
                    alt="Weather Icon"
                    className="h-20 w-20"
                />
                <div className="ml-4 text-center">
                    <p className="text-6xl font-bold">{current.temperature}°C</p>
                    <p className="text-lg capitalize">{current.weather_descriptions[0]}</p>
                </div>
            </div>

            {/* Additional Weather Details */}
            <div className="mt-6 flex justify-around">
                <div className="text-center">
                    <p className="text-sm">Feels Like</p>
                    <p className="text-lg font-semibold">{current.feelslike}°C</p>
                </div>
                <div className="text-center">
                    <p className="text-sm">Humidity</p>
                    <p className="text-lg font-semibold">{current.humidity}%</p>
                </div>
                <div className="text-center">
                    <p className="text-sm">Wind</p>
                    <p className="text-lg font-semibold">{current.wind_speed} km/h</p>
                </div>
            </div>
        </div>
    );
}
