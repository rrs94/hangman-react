import styled from 'styled-components';
import Phrase from '../Phrase';
import LetterPicker from '../LetterPicker';

export const StyledContainer = styled.div``;
export const StyledTitle = styled.h1`
  font-family: fantasy;
  font-size: 40px;
  text-align: center;
`;
export const StyledPhrase = styled(Phrase)`
  display: block;
  margin: auto;
  width: 650px;
  font-family: fantasy;
  text-align: center;
`;
export const StyledPoleStatus = styled.div`
  display: block;
  margin: 40px auto;
  background-image: url(${props => props.background});
  background-position-x: ${props => -(props.x * 77) - 5}px;
  background-position-y: ${props => -(props.y * 85) - 5}px;
  background-repeat: no-repeat;
  width: 72px;
  height: 80px;
`;
export const StyledActions = styled.div`
  display: block;
  text-align: center;
  font-family: fantasy;
`;
export const StyledButton = styled.button`
  background-color: ${props => props.primary ? '#207bf1' : 'white' };
  color: ${props => props.primary ? 'white' : 'gray' };
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px 5px;
  outline: none;
  font-size: 20px;
`;
export const StyledLetterPicker = styled(LetterPicker)``;