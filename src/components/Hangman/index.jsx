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

export default class Hangman extends Component {
  state = {
    lifes: START_LIFES,
  };

  render() {
    const { lifes } = this.state;
    const currentLife = IMAGE_LIFES_MAP[lifes];
    console.log(currentLife);

    return (
      <Container>
        <Title>Hangman</Title>
        <Phrase />
        <PoleStatus
          background={poleImg}
          y={currentLife.y}
          x={currentLife.x}
        />
        <LetterPicker />
      </Container>
    );
  }
}

