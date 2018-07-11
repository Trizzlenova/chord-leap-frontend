import axios from 'axios'
import * as chord from '../actions/chord'


const initialState = [
  {
    id: 0,
    name: 'B min7',
    related_chord: ['A maj', 'E min', 'B# maj']
  },
  {
    id: 1,
    name: 'E min5',
    related_chord: ['Ab maj', 'G# min', 'F maj']
  },
]

export default function chordReducer(state = initialState, action) {
  switch(action.type) {
    case chord.CHORDS_REQUEST:
      return action.payload
    default:
      return state
  }
}

