import React, { Component } from 'react'
import { requestChords } from '../actions/chord'
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

  toggle(event) {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }



  display(event) {
    let chord = this.props.chord
    let target = event.target.id
    let relatedChords = chord[target].related_chord
    let min = 0;
    let max = relatedChords.length
    let randomIndex = Math.floor(Math.random() * (max-min)) + min
    console.log(relatedChords[randomIndex])
    }


  render() {
    const errors = this.props.errors || {}
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        CHORDS
        </DropdownToggle>
        <DropdownMenu onClick={this.display}>
          {this.props.chord.map(chords =>
            <DropdownItem
              id={chords.id}
              name={chords.name}
              header>{chords.name}

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


export default connect(mapStateToProps)(Generator)
