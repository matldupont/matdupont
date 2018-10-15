import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  padding: 5px 10px;
  font-size: 1.5rem;
`;

const Button = ({ children }) => {
  return (
    <StyledButton>{children}adsfasdf</StyledButton>
  )
};

export default Button;