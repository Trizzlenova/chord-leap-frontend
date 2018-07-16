import React, { Component } from 'react'
import { getChords } from '../actions/chord'
import { connect } from 'react-redux';
import Navigation from './Navigation'
import TextInput from './TextInput';
import { Button, Carousel, CarouselItem, CarouselControl, CarouselIndicators,
  CarouselCaption, Col, Form, Input, Dropdown,
  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.display = this.display.bind(this);

    this.state = {
      dropdownOpen: false,
      chords: [],
      randyChord: []
    };
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
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
    this.state.randyChord.push(randomChord)
  }

  renderState() {
    return this.state.randyChord
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.randyChord.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.randyChord.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
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
        <div className='chordPop'>
        {for(let i = 0; i < this.state.randyChord.length; i++) {
          <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={this.state.randyChord[i].id}
            >
            <CarouselCaption captionText={this.state.randyChord[i].related_chords} />
          </CarouselItem>
          }}
        }

        </div>
        <Form>
          <Col sm={10}>
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
