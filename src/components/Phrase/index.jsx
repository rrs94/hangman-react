import React from 'react';
import {
  StyledContainer as Container,
  StyledChar as Char,
  StyledWord as Word,
} from './styled';

const Phrase = ({ className, text, chars }) => {
  const listWords = text.split(" ");
  return (
    <Container className={className} >
      {
        listWords.map((word) => {
          const listChars = word.split("");
          return (
            <Word>
              {
                listChars.map((char) => {
                  const isPicked = chars[char.toLowerCase()];
                  return <Char active={isPicked}>{isPicked ? char : "•"}</Char>;
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