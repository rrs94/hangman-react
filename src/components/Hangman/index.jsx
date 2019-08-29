import React, { Component } from 'react';
import poleImg from '../../assets/images/hangman.jpg';
import sadDogImage from '../../assets/images/sad_dog.png'
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
  };

  componentDidMount() {
    const totalMovies = MoviesJSON.length;
    const random = Math.ceil(Math.random() * totalMovies);
    this.setState({
      phrase: MoviesJSON[random],
    });
  }

  handleNewGame = () => {
    const totalMovies = MoviesJSON.length;
    const random = Math.ceil(Math.random() * totalMovies);
    this.setState({
      lifes: START_LIFES,
      phrase: MoviesJSON[random],
      letterMap: START_LETTERS,
    });
  }

  handleClickLetter = (key) => {
    const { letterMap, phrase, lifes } = this.state;
    const phraseLowercase = phrase.toLowerCase();
    const foundInPhrase = phraseLowercase.includes(key);
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

  render() {
    const { lifes, phrase, letterMap } = this.state;
    const currentLife = IMAGE_LIFES_MAP[lifes];
    const playerLost = lifes === 0;

    return (
      <Container>
        <Title>Hangman</Title>
        <Phrase
          text={phrase}
          chars={letterMap}
        />
        <PoleStatus
          background={poleImg}
          y={currentLife.y}
          x={currentLife.x}
        />
        {
          playerLost ? (
            <Message image={sadDogImage} title="Sorry, try again! u__u" /> 
          ) : (
            null
          )
        }
        <LetterPicker letterMap={letterMap} onClickLetter={this.handleClickLetter} disabled={lifes === 0} />
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

