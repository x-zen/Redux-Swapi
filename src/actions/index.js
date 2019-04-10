// we'll need axios
import axios from 'axios'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_JEDI_START = 'FETCH_JEDI_START';
export const FETCH_JEDI_SUCCESS = 'FETCH_JEDI_SUCCESS';
export const FETCH_JEDI_FAIL = 'FETCH_JEDI_FAIL';
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const getJedi = () => dispatch => {
  dispatch({ type: FETCH_JEDI_START });
  axios
    .get('')
    .then(res =>
      dispatch({ type: FETCH_JEDI_SUCCESS, payload: res.data.results })
    )
    .catch(err =>
      dispatch({ type: FETCH_JEDI_START, payload: err })
    );
};
