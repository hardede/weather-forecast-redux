import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const CurrentWeather: FC = () => {
  const { weatherCurrent, error, loading } = useTypedSelector(
    state => state.weatherCurrent
  );
  const { cityFind } = useTypedSelector(state => state.city);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-red-500 text-xl">{error}</h1>;
  }

  return (
    <>
      {Object.keys(weatherCurrent).length === 0 ? (
        <div>Enter your city</div>
      ) : (
        <div key={weatherCurrent.id} className="weather">
          <div className="menu">
            <div>
              <p className="text-left font-semibold text-[18px] leading-none">
                {cityFind}
              </p>
              <p className="text-left leading-none">
                {weatherCurrent.weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="w-[100px]"
              src={`icons/${weatherCurrent.weather[0].icon}.png`}
            />
          </div>
          <div className="menu">
            <p className="temperature">
              {Math.round(weatherCurrent.main.temp)}°C
            </p>
            <div className="w-full pl-5">
              <div className="parameter-row">
                <span className="parameter-label">Details</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">
                  {Math.round(weatherCurrent.main.feels_like)}°C
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">
                  {weatherCurrent.wind.speed} m/s
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-left text-xs">Humidity</span>
                <span className="text-right font-semibold text-xs">
                  {weatherCurrent.main.humidity}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-left text-xs">Pressure</span>
                <span className="text-right font-semibold text-xs">
                  {weatherCurrent.main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(CurrentWeather);
