import axios from "axios";
import { Dispatch } from "redux";
import {
  ForecastAction,
  ForecastActionTypes,
} from "../../types/weatherForecast";
const coordinatesApi = "http://api.openweathermap.org/geo/1.0/direct";
const forecastApi = "http://api.openweathermap.org/data/2.5/forecast";

export const fetchWeatherForecast = (city: string) => {
  return async (dispatch: Dispatch<ForecastAction>) => {
    try {
      dispatch({ type: ForecastActionTypes.FETCH_FORECAST });
      const coordinates = await axios.get(coordinatesApi, {
        params: {
          q: city,
          limit: 1,
          appid: "3e889d69c5d056ea6b1230f4db90404d",
        },
      });

      const coordinatesData = await coordinates.data;
      const arr: any = [];

      coordinatesData.map((item: any) =>
        arr.push(item.lat.toFixed(0), item.lon.toFixed(0))
      );

      const [lat, lon] = arr;
      const weatherForecast = await axios
        .get(forecastApi, {
          params: {
            lat: lat,
            lon: lon,
            appid: "3e889d69c5d056ea6b1230f4db90404d",
            units: "metric",
          },
        })
        .then(response => response.data);
      const weatherForecastList = weatherForecast.list;

      dispatch({
        type: ForecastActionTypes.FETCH_FORECAST_SUCCESS,
        payload: weatherForecastList,
      });
    } catch (e) {
      dispatch({
        type: ForecastActionTypes.FETCH_FORECAST_ERROR,
        payload:
          "An error occurred while loading weather data, you may not have entered the city correctly",
      });
    }
  };
};
