import * as chord from '../actions/chord'


const initialState = [
  {
    id: 0,
    name: 'B min7',
    related_chords: ['A maj', 'E min', 'B# maj'] ['F maj', 'A min', 'D# maj']
  },
  {
    id: 1,
    name: 'E min5',
    related_chords: ['Ab maj', 'G# min', 'F maj']
  },
  {
    id: 2,
    name: 'B min7',
    related_chords: ['A maj', 'E min', 'B# maj']
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

