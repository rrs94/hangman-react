import styled from 'styled-components';

export const LetterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 80%;
  margin: auto; 
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
  border: 1px solid;
  padding: 5px;
  margin-left: 5px;
  margin-top: 5px;
  text-align: center;
`;