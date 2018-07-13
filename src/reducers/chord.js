import * as chord from '../actions/chord'


const initialState = [
  {
    id: 0,
    name: 'B min',
    related_chords: ['A min', 'E min', 'B# maj']
  },
  {
    id: 1,
    name: 'E min',
    related_chords: ['A min', 'B min', 'G maj']
  },
  {
    id: 2,
    name: 'A min',
    related_chords: ['B min', 'E min', 'G maj']
  },
]

export default function chordReducer(state = initialState, action) {
  switch(action.type) {
    case chord.CHORDS_REQUEST:
      return action.payload
    case chord.CHORDS_FAILURE:
      return {
        errors:
          action.payload.response ||
            {'non_field_errors': action.payload.statusText},
    }
    default:
      return state
  }
}

