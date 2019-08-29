import React from 'react';
import { LetterComponent, LetterContainer } from './styled.js';

const LetterPicker = ({ letterMap, onClickLetter, disabled }) => {
  const letterObjects = Object.keys(letterMap).map((key) => {
    if (letterMap[key] === null) {
      return (
        <LetterComponent key={key} available={!disabled} onClick={() => !disabled && onClickLetter(key)}>
          {
            key
          }
        </LetterComponent>
      );
    } else if (!letterMap[key]) {
      return (
        <LetterComponent key={key} notFound>
          {
            key
          }
        </LetterComponent>
      );
    } else {
      return (
        <LetterComponent key={key} found>
          {
            key
          }
        </LetterComponent>
      );
    }
  });

  return (
    <LetterContainer>
      {
        letterObjects
      }
    </LetterContainer>
  );
  
};

export default LetterPicker;