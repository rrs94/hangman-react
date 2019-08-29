import React, { Component } from 'react';
import poleImg from '../../assets/images/hangman.jpg';
import {
  START_LIFES,
  IMAGE_LIFES_MAP,
} from './../../utils/constants';
import {
  StyledPhrase as Phrase,
  StyledActions as Actions,
  StyledButton as Button,
  StyledTitle as Title,
  StyledPoleStatus as PoleStatus,
  StyledLetterPicker as LetterPicker,
  StyledContainer as Container,
} from './styled';

export default class Hangman extends Component {
  state = {
    lifes: START_LIFES,
    phrase: "This is the most awesome thing",
  };

  handleNewGame = () => {
    this.setState({
      lifes: START_LIFES,
      phrase: "New Word for a new game",
    });
  }

  handleResetGame = () => {
    this.setState({
      lifes: START_LIFES,
    });
  }

  render() {
    const { lifes, phrase } = this.state;
    const currentLife = IMAGE_LIFES_MAP[lifes];
    const options = {
      a: true,
      e: true,
      h: true,
      t: true,
    };

    return (
      <Container>
        <Title>Hangman</Title>
        <Phrase
          text={phrase}
          chars={options}
        />
        <PoleStatus
          background={poleImg}
          y={currentLife.y}
          x={currentLife.x}
        />
        <LetterPicker />
        <Actions>
          <Button
            primary
            onClick={this.handleNewGame}
          >
            New Game
          </Button>
          <Button
            onClick={this.handleResetGame}
          >
            Restart
          </Button>
        </Actions>
      </Container>
    );
  }
}

