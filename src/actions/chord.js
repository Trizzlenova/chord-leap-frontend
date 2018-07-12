import axios from 'axios'

export const CHORDS_REQUEST = 'CHORDS_REQUEST'
export const CHORDS_SUCCESS = 'CHORDS_SUCCESS';
export const CHORDS_FAILURE = 'CHORDS_FAILURE';

// const root_url = "https://chord-leap-backend.herokuapp.com";
const root_url = 'http://localhost:8000'

export function getChords(id) {
  return function(dispatch) {
    axios.get(`${root_url}/api/chords`, id)
    .then(function(response) {
      dispatch({type:CHORDS_REQUEST, headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}, payload: response.data})
    })
    .catch(function(error) {
      console.log(error)
    })
  }
}
