import { SEARCH_PLACES, SEARCH_PLACES_SUCCESS, SEARCH_PLACES_FAILURE } from '../actions/search';

const initialState = {
    searchHistory: [],
    searchResults: [],
    isLoading: false,
    error: null
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case SEARCH_PLACES:
        return { ...state, isLoading: true };
      case SEARCH_PLACES_SUCCESS:
        return {
          ...state,
          searchResults: action.payload.predictions,
          searchHistory: [...state.searchHistory, action.payload.query],
          isLoading: false
        };
      case SEARCH_PLACES_FAILURE:
        return { ...state, error: action.payload, isLoading: false };
      default:
        return state;
    }
  }
  
  export default reducer;
  