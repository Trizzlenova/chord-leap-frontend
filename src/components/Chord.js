import React, { Component } from 'react'
import { getChords } from '../actions/chord'
import { connect } from 'react-redux';
import Navigation from './Navigation'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

export class Chord extends Component {
  // state = {
  //   id: '',
  //   name: '',
  //   related_chords: '',
  // }

  componentWillMount() {
    getChords()
  }

  render() {
    let chords = this.props.chord;

    return (
      <div className='chord-boi'>
        <Navigation />
         <span className='chordName'>
          {Object.keys(chords).map(chord =>
            <Card key={chords[chord].id}>
              <CardBody>
                <CardTitle>{chords[chord].name}:
                  <div class='spaceboi'>
                  <CardText>[{chords[chord].related_chords + " "}]</CardText>
                  </div>
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


export default connect(mapStateToProps, getChords)(Chord)
