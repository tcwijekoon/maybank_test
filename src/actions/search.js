import { createAction } from 'redux-thunk';


export const SEARCH_PLACES = 'SEARCH_PLACES';
export const SEARCH_PLACES_SUCCESS = 'SEARCH_PLACES_SUCCESS';
export const SEARCH_PLACES_FAILURE = 'SEARCH_PLACES_FAILURE';

export const searchPlaces = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_PLACES });
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=AIzaSyBPw7YwzL13PL70v6pUnyhpHZJcM3cyIAg`);
      const data = await response.json();
      dispatch({ type: SEARCH_PLACES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SEARCH_PLACES_FAILURE, payload: error });
    }
  };
};
