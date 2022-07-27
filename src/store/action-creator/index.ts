import * as CoordinatesActionCreators from "./city";
import * as WeatherForecastActionCreators from "./weatherForecast";
import * as WeatherCurrentActionCreators from "./weatherCurrent";

export default {
  ...CoordinatesActionCreators,
  ...WeatherForecastActionCreators,
  ...WeatherCurrentActionCreators,
};
