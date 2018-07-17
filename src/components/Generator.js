import React, { Component } from 'react'
import { getChords } from '../actions/chord'
import { connect } from 'react-redux';
import Navigation from './Navigation'
import TextInput from './TextInput';
import { Button, Col, Form, Input, Dropdown,
  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class Generator extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.display = this.display.bind(this);

    this.state = {
      dropdownOpen: false,
      chords: [],
      randyChord: []
    };
  }

  componentWillMount() {
    getChords()
  }

  toggle(event) {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }


  display(event) {
    let chord = this.props.chord
    let target = event.target.getAttribute('name');
    let relatedChords = chord[target].related_chords
    let min = 0;
    let max = relatedChords.length
    let randomIndex = Math.floor(Math.random() * (max-min)) + min
    let randomChord = relatedChords[randomIndex]
    let chordPlacer = document.getElementById('dropChordHere')
    let node = document.createElement("h3");
    let textnode = document.createTextNode(randomChord)
    node.appendChild(textnode);
    chordPlacer.appendChild(node);
    this.state.randyChord.push(randomChord)
    alert(randomChord)
  }

  renderState() {
    return this.state.randyChord
  }

  render() {
    const { activeIndex } = this.state;
    const errors = this.props.errors || {}
    const chords = this.props.chord;

    return (
      <div className = 'dropItLikeItsHot'>
        <Navigation />
        <h1>Click a Chord!</h1>
        {Object.keys(chords).map(chord =>
          <Button className='spacegrl' onClick = {this.display}
            id={chords[chord].id}
                name={chords[chord].name}
                header>{chords[chord].name}
          </Button>
        )}
        <Form>
          <Col sm={10}>
          <div id='dropChordHere'></div>
          </Col>
        </Form>
        <Button>Save</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chord: state.chord
  }
}


export default connect(mapStateToProps, getChords)(Generator)
