import { RSAA } from 'redux-api-middleware';

export const CHORDS_REQUEST = 'CHORDS_REQUEST'
export const CHORDS_SUCCESS = 'CHORDS_SUCCESS';
export const CHORDS_FAILURE = 'CHORDS_FAILURE';

export const requestChords = (name, related_chords) => ({
  [RSAA]: {
    endpoint: '/api/chords',
    method: 'GET',
    body: JSON.stringify({name, related_chords}),
    headers: {'Content-Type': 'application/json'},
    types: [
        CHORDS_REQUEST, CHORDS_SUCCESS, CHORDS_FAILURE
      ]
  }
})

console.log(requestChords())
