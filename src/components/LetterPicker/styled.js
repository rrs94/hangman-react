import styled from 'styled-components';

export const LetterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const LetterComponent = styled.div`
  flex: 1 0 30px;
  box-sizing: border-box;
  cursor: ${(props) => {
    if (props.available) {
      return 'pointer';
    } else {
      return 'not-allowed';
    }
  }}
  background-color: ${(props) => {
    if (props.notFound) {
      return 'red';
    } else if(props.found) {
      return 'green';
    } else {
      return 'inherit';
    }
  }}
  font-family: fantasy;
  text-decoration: ${(props) => {
    if (props.notFound) {
      return 'line-through';
    } else if (props.found) {
      return 'underline';
    } else {
      return 'inherit';
    }
  }}
  text-decoration-style: solid;
  text-decoration-color: inherit;
  border: 1px solid;
  padding: 5px;
  margin-left: 5px;
  margin-top: 5px;
  text-align: center;
`;