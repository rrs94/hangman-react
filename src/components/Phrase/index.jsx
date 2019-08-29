import React from 'react';
import {
  StyledContainer as Container,
  StyledChar as Char,
  StyledWord as Word,
} from './styled';

const Phrase = ({ className, text, chars, phraseMap }) => {
  const listWords = text.split(" ");
  return (
    <Container className={className} >
      {
        listWords.map((word, index) => {
          const listChars = word.split("");
          return (
            <Word key={`${word}${index}`}>
              {
                listChars.map((char, index) => {
                  const isPicked = chars[char.toLowerCase()] || !phraseMap[char.toLowerCase()];
                  return <Char key={`${char}${index}`} active={isPicked}>{isPicked ? char : "•"}</Char>;
                })
              }
            </Word>
          )
        })
      }
    </Container>
  )
}

export default Phrase;