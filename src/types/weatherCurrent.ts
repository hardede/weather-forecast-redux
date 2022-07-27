import { ICurrentWeather } from "./types";
export interface CurrentState {
  weatherCurrent: ICurrentWeather | any;
  loading: boolean;
  error: null | string;
}

export enum CurrentActionTypes {
  FETCH_CURRENT = "FETCH_CURRENT",
  FETCH_CURRENT_SUCCESS = "FETCH_CURRENT_SUCCESS",
  FETCH_CURRENT_ERROR = "FETCH_CURRENT_ERROR",
}
interface FetchCurrentAction {
  type: CurrentActionTypes.FETCH_CURRENT;
}
interface FetchCurrentErrorAction {
  type: CurrentActionTypes.FETCH_CURRENT_SUCCESS;
  payload: any[];
}
interface FetchCurrentSuccessAction {
  type: CurrentActionTypes.FETCH_CURRENT_ERROR;
  payload: string;
}

export type CurrentAction =
  | FetchCurrentAction
  | FetchCurrentErrorAction
  | FetchCurrentSuccessAction;
