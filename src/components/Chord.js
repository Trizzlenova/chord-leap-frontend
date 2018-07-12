import React, { Component } from 'react'
import { getChords, requestChords } from '../actions/chord'
import { connect } from 'react-redux';
import Navigation from './Navigation'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

export class Chord extends Component {
  state = {
    id: '',
    name: '',
    related_chord: '',
  }


  render() {
    return (
      <div className='chord-boi'>
        <Navigation />
         <span className='chordName'>
          {this.props.chord.map(chords =>
            <Card key={chords.id}>
              <CardBody>
                <CardTitle>{chords.name}:
                  <CardText>[{chords.related_chord}]</CardText>
                </CardTitle>
              </CardBody>
            </Card>
          )}
         </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chord: state.chord
  }
}


export default connect(mapStateToProps)(Chord)
