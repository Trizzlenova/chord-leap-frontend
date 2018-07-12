import { RSAA } from 'redux-api-middleware';
import axios from 'axios'

export const CHORDS_REQUEST = 'CHORDS_REQUEST'
export const CHORDS_SUCCESS = 'CHORDS_SUCCESS';
export const CHORDS_FAILURE = 'CHORDS_FAILURE';

const root_url = "http://localhost:8000/";

// export const requestChords = (id, name, related_chords) => ({
//   [RSAA]: {
//     endpoint: '/api/chords',
//     method: 'GET',
//     body: JSON.stringify({id, name, related_chords}),
//     headers: {'Content-Type': 'application/json'},
//     types: [
//       CHORDS_REQUEST, CHORDS_SUCCESS, CHORDS_FAILURE
//     ]
//   }
// })

export function getChords() {
  return(dispatch) => {
    return axios.get(`${root_url}/api/chords/`)
      .then((response)=>{
        dispatch(grabData(response.data));
      })
  }
}

export function grabData(id, name, related_chords) {
  return {
    type: CHORDS_SUCCESS,
    id: id,
    name: name,
    related_chords: related_chords
  }
}
