import styled from 'styled-components';
import Phrase from '../Phrase';
import LetterPicker from '../LetterPicker';

export const StyledContainer = styled.div``;
export const StyledTitle = styled.h1`
  font-family: fantasy;
  font-size: 40px;
  text-align: center;
`;
export const StyledPhrase = styled(Phrase)``;
export const StyledPoleStatus = styled.div`
  display: block;
  margin: auto;
  background-image: url(${props => props.background});
  background-position-x: ${props => -(props.x * 77) - 5}px;
  background-position-y: ${props => -(props.y * 85) - 5}px;
  background-repeat: no-repeat;
  width: 72px;
  height: 80px;
`;
export const StyledLetterPicker = styled(LetterPicker)``;