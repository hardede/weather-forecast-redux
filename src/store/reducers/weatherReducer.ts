import {
  ForecastAction,
  ForecastActionTypes,
  ForecastState,
} from "../../types/weatherForecast";

const initialState: ForecastState = {
  weatherForecast: [],
  loading: false,
  error: null,
};

export const weatherReducer = (
  state = initialState,
  action: ForecastAction
): ForecastState => {
  switch (action.type) {
    case ForecastActionTypes.FETCH_FORECAST:
      return { ...state, loading: true, error: null };
    case ForecastActionTypes.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        weatherForecast: action.payload,
      };
    case ForecastActionTypes.FETCH_FORECAST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
