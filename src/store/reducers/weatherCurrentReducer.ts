import {
  CurrentAction,
  CurrentActionTypes,
  CurrentState,
} from "./../../types/weatherCurrent";

const initialState: CurrentState = {
  weatherCurrent: {},
  loading: false,
  error: null,
};

export const weatherCurrentReducer = (
  state = initialState,
  action: CurrentAction
): CurrentState => {
  switch (action.type) {
    case CurrentActionTypes.FETCH_CURRENT:
      return { ...state, loading: true, error: null };
    case CurrentActionTypes.FETCH_CURRENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        weatherCurrent: action.payload,
      };
    case CurrentActionTypes.FETCH_CURRENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
