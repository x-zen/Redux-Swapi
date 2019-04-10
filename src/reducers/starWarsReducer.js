import/* we need our action types here*/ {
  FETCH_JEDI_START,
  FETCH_JEDI_SUCCESS,
  FETCH_JEDI_FAIL
} from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetchingJedi: false,
  err: ''
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_JEDI_START:
      return {
        ...state,
        isFetchingJedi: true,
        err: ''
      }
    case FETCH_JEDI_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        err: ''
      }
    case FETCH_JEDI_FAIL:
      return {
        ...state,
        err: action.payload    
      }
    default:
      return state;
  }
};
