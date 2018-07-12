import axios from 'axios'
import * as chord from '../actions/chord'


const initialState = [
  {
    id: 0,
    name: 'B min7',
    related_chords: ['A maj', 'E min', 'B# maj']
  },
  {
    id: 1,
    name: 'E min5',
    related_chords: ['Ab maj', 'G# min', 'F maj']
  },
]

export default (state = initialState, action) => {
  if(action.type === chord.CHORDS_SUCCESS) {
    return{
      ...state,
      id:action.id,
      name:action.name,
      related_chords:action.related_chords
    }
  } else {
      return {
        ...state
      }
  }
}

// export default function chordReducer(state = initialState, action) {
//   switch(action.type) {
//     case chord.CHORDS_REQUEST:
//       return action.payload
//     case chord.CHORDS_FAILURE:
//       return {
//         errors:
//           action.payload.response ||
//             {'non_field_errors': action.payload.statusText},
//     }
//     default:
//       return state
//   }
// }

// export default chordReducer

