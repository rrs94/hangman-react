import React from 'react';
import {
  StyledContainer as Container,
  StyledChar as Char,
  StyledSpace as Space,
} from './styled';

const Phrase = ({ className, text, chars }) => {
  const listChars = text.split("");
  return (
    <Container className={className} >
      {
        listChars.map((char) => {
          const isPicked = chars[char.toLowerCase()];
          if (char === " ") {
            return <Space />
          } else {
            return <Char active={isPicked}>{isPicked ? char : "•"}</Char>;
          }
        })
      }
    </Container>
  )
}

export default Phrase;