export interface CityState {
  cityFind: null | string;
  loading: boolean;
  error: null | string;
}

export enum CityActionTypes {
  FETCH_CITY = "FETCH_CITY",
  FETCH_CITY_SUCCESS = "FETCH_CITY_SUCCESS",
  FETCH_CITY_ERROR = "FETCH_CITY_ERROR",
}
interface FetchCityAction {
  type: CityActionTypes.FETCH_CITY;
}
interface FetchCityErrorAction {
  type: CityActionTypes.FETCH_CITY_SUCCESS;
  payload: string;
}
interface FetchCitySuccessAction {
  type: CityActionTypes.FETCH_CITY_ERROR;
  payload: string;
}
export type CityAction =
  | FetchCityAction
  | FetchCityErrorAction
  | FetchCitySuccessAction;
