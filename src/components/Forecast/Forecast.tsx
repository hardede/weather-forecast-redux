import { observer } from "mobx-react-lite";
import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { WEEK_DAYS } from "../../constants/days";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Forecast: FC = () => {
  const { weatherForecast, error, loading } = useTypedSelector(
    state => state.weatherForecast
  );
  const weatherSpliced = [...weatherForecast].splice(0, 7);

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <></>;
  }

  return (
    <div className="pb-5">
      {weatherForecast.length >= 1 && (
        <>
          <label className="title">Daily</label>
          <Accordion allowZeroExpanded>
            {weatherSpliced.map((item: any, idx: any) => (
              <AccordionItem key={item.dt}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <img
                        src={`icons/${item.weather[0].icon}.png`}
                        className="icon-small"
                        alt="weather"
                      />
                      <label className="day">{forecastDays[idx]}</label>
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_max)}°C /
                        {Math.round(item.main.temp_min)}°C
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                      <label>Pressure:</label>
                      <label>{item.main.pressure}</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity:</label>
                      <label>{item.main.humidity}</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Clouds:</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Wind speed:</label>
                      <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Sea level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Feels like:</label>
                      <label>{item.main.feels_like}°C</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
    </div>
  );
};

export default observer(Forecast);
