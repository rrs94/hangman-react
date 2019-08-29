import React, { Component } from 'react';
import poleImg from '../../assets/images/hangman.jpg';
import {
  StyledPhrase as Phrase,
  StyledTitle as Title,
  StyledPoleStatus as PoleStatus,
  StyledLetterPicker as LetterPicker,
  StyledContainer as Container,
} from './styled';

const START_LIFES = 12;
const IMAGE_LIFES_MAP = {
  12: { x: 0, y: 0},
  11: { x: 1, y: 0},
  10: { x: 2, y: 0},
  9: { x: 0, y: 1},
  8: { x: 1, y: 1},
  7: { x: 2, y: 1},
}

const START_LETTERS = {
  a: null,
  b: null,
  c: null,
  d: null,
  e: null,
  f: null,
  g: null,
  h: null,
  i: null,
  j: null,
  k: null,
  l: null,
  m: null,
  n: null,
  o: null,
  p: null,
  q: null,
  r: null,
  s: null,
  t: null,
  u: null,
  v: null,
  w: null,
  x: null,
  y: null,
  z: null,
}

export default class Hangman extends Component {
  state = {
    lifes: START_LIFES,
    letterMap: START_LETTERS,
  };

  onClickLetter = (key) => {
    const tempLetterMap = this.state.letterMap;
    tempLetterMap[key] = 
    this.setState({
      letterMap: {
        ...this.state.letterMap,
        [key]: true,
      }
    });
  };

  render() {
    const { lifes, letterMap } = this.state;
    const currentLife = IMAGE_LIFES_MAP[lifes];
    console.log(currentLife);
    console.log({letterMap});

    return (
      <Container>
        <Title>Hangman</Title>
        <Phrase />
        <PoleStatus
          background={poleImg}
          y={currentLife.y}
          x={currentLife.x}
        />
        <LetterPicker letterMap={letterMap} onClickLetter={this.onClickLetter} />
      </Container>
    );
  }
}

