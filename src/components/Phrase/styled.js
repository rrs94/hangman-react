import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: block;
  margin: auto;
  width: 900px;
  font-family: fantasy;
  text-align: center;
`;

export const StyledSpace = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  padding: 5px;
`;

export const StyledChar = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  padding: 5px;
  font-size: 20px;
  border-bottom: 2px solid ${
    props => props.active ? 'black' : 'silver'
  };
`;
