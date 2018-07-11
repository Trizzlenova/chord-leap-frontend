import React, {Component} from 'react'
import Chord from '../components/Chord'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';

class ChordContainer extends Component {
  render()

  return(
    <main className = 'chordContainer'>

}

function mapStateToProps(state) {
  return {
    chord: state.chord
  };
}

export default connect(mapStateToProps)(ChordContainer);
