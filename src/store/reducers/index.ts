import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";
import { weatherCurrentReducer } from "./weatherCurrentReducer";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({
  city: cityReducer,
  weatherForecast: weatherReducer,
  weatherCurrent: weatherCurrentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
