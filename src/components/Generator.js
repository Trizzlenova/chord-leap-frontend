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
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const errors = this.props.errors || {}
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          CHORD
        </DropdownToggle>
        <DropdownMenu>
          {this.props.chord.map(chords =>
            <DropdownItem key={chords.id} header>{chords.name}</DropdownItem>
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
