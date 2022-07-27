import axios from "axios";
import { Dispatch } from "redux";
import { CurrentAction, CurrentActionTypes } from "../../types/weatherCurrent";
const coordinatesApi = "http://api.openweathermap.org/geo/1.0/direct";
const currentWeatherApi = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherCurrent = (city: string) => {
  return async (dispatch: Dispatch<CurrentAction>) => {
    try {
      dispatch({ type: CurrentActionTypes.FETCH_CURRENT });
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
      const currentWeather = await axios.get(currentWeatherApi, {
        params: {
          lat: lat,
          lon: lon,
          appid: "3e889d69c5d056ea6b1230f4db90404d",
          units: "metric",
        },
      });
      const currentWeatherData = currentWeather.data;

      dispatch({
        type: CurrentActionTypes.FETCH_CURRENT_SUCCESS,
        payload: currentWeatherData,
      });
    } catch (e) {
      dispatch({
        type: CurrentActionTypes.FETCH_CURRENT_ERROR,
        payload:
          "An error occurred while loading weather data, you may not have entered the city correctly",
      });
    }
  };
};
