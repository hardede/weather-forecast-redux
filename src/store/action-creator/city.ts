import axios from "axios";
import { Dispatch } from "redux";
import { CityAction, CityActionTypes } from "../../types/cityType";

const coordinatesApi = "http://api.openweathermap.org/geo/1.0/direct";

export const fetchCity = (city: string) => {
  return async (dispatch: Dispatch<CityAction>) => {
    try {
      dispatch({ type: CityActionTypes.FETCH_CITY });
      const coordinates = await axios.get(coordinatesApi, {
        params: {
          q: city,
          limit: 1,
          appid: "3e889d69c5d056ea6b1230f4db90404d",
        },
      });

      const coordinatesData = await coordinates.data;

      dispatch({
        type: CityActionTypes.FETCH_CITY_SUCCESS,
        payload: coordinatesData.map((city: any) => city.name),
      });
    } catch (e) {
      dispatch({
        type: CityActionTypes.FETCH_CITY_ERROR,
        payload: "wrong city",
      });
    }
  };
};
