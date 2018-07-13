import React, { Component } from 'react'
import { getChords } from '../actions/chord'
import { connect } from 'react-redux';
import Navigation from './Navigation'
import TextInput from './TextInput';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export class Generator extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.display = this.display.bind(this);

    this.state = {
      dropdownOpen: false,
      chords: []
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
    console.log("======== TARGET'S RELATED CHORDS ==========")
    console.log(relatedChords)
    console.log('==================')
    let min = 0;
    let max = relatedChords.length
    let randomIndex = Math.floor(Math.random() * (max-min)) + min
    let randomChord = relatedChords[randomIndex]
    console.log("======== RANDOM CHORD ==========")
    console.log(randomChord)
    console.log('==================')
  }


  render() {
    const errors = this.props.errors || {}
    const chords = this.props.chord;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        CHORDS
        </DropdownToggle>
        <DropdownMenu onClick={this.display}>
          {Object.keys(chords).map(chord =>
            <DropdownItem
              id={chords[chord].id}
              name={chords[chord].name}
              header>{chords[chord].name}

            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    chord: state.chord
  }
}


export default connect(mapStateToProps, getChords)(Generator)
