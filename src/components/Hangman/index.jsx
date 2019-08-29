import React, { Component } from 'react';
import poleImg from '../../assets/images/hangman.jpg';
import sadDogImage from '../../assets/images/sad_dog.png';
import happyDogImage from '../../assets/images/happy_dog.png';
import {
  START_LIFES,
  IMAGE_LIFES_MAP,
  START_LETTERS,
} from '../../utils/constants';
import MoviesJSON from '../../utils/movies.json';
import {
  StyledPhrase as Phrase,
  StyledActions as Actions,
  StyledButton as Button,
  StyledTitle as Title,
  StyledPoleStatus as PoleStatus,
  StyledLetterPicker as LetterPicker,
  StyledContainer as Container,
  StyledMessage as Message,
} from './styled';

export default class Hangman extends Component {
  state = {
    lifes: START_LIFES,
    phrase: "",
    letterMap: START_LETTERS,
    phraseMap: {},
  };

  componentDidMount() {
    const totalMovies = MoviesJSON.length;
    const random = Math.ceil(Math.random() * totalMovies) - 1;
    const phrase = MoviesJSON[Math.max(random, 0)];
    const phraseMap = {};
    for (let i = 0; i < phrase.length; i++) {
      if (START_LETTERS.hasOwnProperty(phrase[i].toLowerCase())) {
        phraseMap[phrase[i].toLowerCase()] = true;
      }
    }
    this.setState({
      phrase,
      phraseMap,
    });
  }

  handleNewGame = () => {
    const totalMovies = MoviesJSON.length;
    const random = Math.ceil(Math.random() * totalMovies) - 1;
    const phrase = MoviesJSON[Math.max(random, 0)];
    const phraseMap = {};
    for (let i = 0; i < phrase.length; i++) {
      if (START_LETTERS.hasOwnProperty(phrase[i].toLowerCase())) {
        phraseMap[phrase[i].toLowerCase()] = true;
      }
    }
    this.setState({
      lifes: START_LIFES,
      phrase,
      phraseMap,
      letterMap: START_LETTERS,
    });
  }

  handleClickLetter = (key) => {
    const { letterMap, phraseMap, lifes } = this.state;
    const foundInPhrase = phraseMap[key] || false;
    this.setState({
      letterMap: {
        ...letterMap,
        [key]: foundInPhrase,
      },
      lifes: foundInPhrase ? lifes : lifes - 1,
    });
  };

  handleResetGame = () => {
    this.setState({
      lifes: START_LIFES,
      letterMap: START_LETTERS,
    });
  }

  isGameOver = () => {
    const { phraseMap, letterMap, lifes } = this.state;
    if (lifes <= 0) {
      return true;
    }
    return Object.keys(phraseMap).every((key) => letterMap[key]);
  }

  render() {
    const { lifes, phrase, letterMap, phraseMap } = this.state;
    const currentLife = IMAGE_LIFES_MAP[lifes];
    const playerLost = lifes === 0;
    const gameOver = this.isGameOver();
    const playerWon = gameOver && !playerLost;

    return (
      <Container>
        <Title>Hangman</Title>
        <Phrase
          text={phrase}
          chars={letterMap}
          phraseMap={phraseMap}
        />
        <PoleStatus
          background={poleImg}
          y={currentLife.y}
          x={currentLife.x}
        />
        {
          playerLost && <Message image={sadDogImage} title="You lost" />
        }
        {
          playerWon && <Message image={happyDogImage} title="You won!" />
        }
        <LetterPicker letterMap={letterMap} onClickLetter={this.handleClickLetter} disabled={gameOver} />
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

