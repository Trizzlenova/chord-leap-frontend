import axios from 'axios'

export const CHORDS_REQUEST = 'CHORDS_REQUEST'
export const CHORDS_SUCCESS = 'CHORDS_SUCCESS';
export const CHORDS_FAILURE = 'CHORDS_FAILURE';

// const root_url = "https://chord-leap-backend.herokuapp.com";
const root_url = 'http://localhost:8000'

export function getChords(id) {
  return function(dispatch) {
    axios.get(`${root_url}/api/chords/`, {
      withCredentials: true
    })
    .then(function(response) {
      const data = {};
      response.data.forEach((item) => {
        data[item.name] = item;
        // Turning a stringified array into an actual array
        data[item.name]["related_chords"] = JSON.parse(item.related_chords.replace(/\'/g, '"'))
      })
      dispatch({type:CHORDS_REQUEST, headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}, payload: data})
    })
    .catch(function(error) {
      console.log(error)
    })
  }
}
