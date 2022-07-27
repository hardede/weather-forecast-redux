import { IWeather } from "./types";

export interface ForecastState {
  weatherForecast: IWeather[];
  loading: boolean;
  error: null | string;
}

export enum ForecastActionTypes {
  FETCH_FORECAST = "FETCH_FORECAST",
  FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS",
  FETCH_FORECAST_ERROR = "FETCH_FORECAST_ERROR",
}
interface FetchForecastAction {
  type: ForecastActionTypes.FETCH_FORECAST;
}
interface FetchForecastErrorAction {
  type: ForecastActionTypes.FETCH_FORECAST_SUCCESS;
  payload: any[];
}
interface FetchForecastSuccessAction {
  type: ForecastActionTypes.FETCH_FORECAST_ERROR;
  payload: string;
}
export type ForecastAction =
  | FetchForecastAction
  | FetchForecastErrorAction
  | FetchForecastSuccessAction;
