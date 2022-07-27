import { CityAction, CityActionTypes, CityState } from "../../types/cityType";

const initialState: CityState = {
  cityFind: "",
  loading: false,
  error: null,
};

export const cityReducer = (
  state = initialState,
  action: CityAction
): CityState => {
  switch (action.type) {
    case CityActionTypes.FETCH_CITY:
      return { ...state, loading: true, error: null };
    case CityActionTypes.FETCH_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cityFind: action.payload,
      };
    case CityActionTypes.FETCH_CITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
