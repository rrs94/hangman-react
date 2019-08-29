import React from 'react';
import {
  StyledContainer as Container,
  StyledTitle as Title,
  StyledImage as Image,
} from './styled';

const Message = ({ className, title, image }) => (
  <Container className={className}>
    <Title>{title}</Title>
    <Image src={image} />
  </Container>
)

export default Message;