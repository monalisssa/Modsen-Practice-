import React from 'react';
import { Styled } from './styled';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ icon, bgColor, width, onClick, children, type }) => {
  return (
    <Styled bgColor={bgColor} width={width} onClick={onClick} type={type}>
      {icon && <img src={icon} />}
      {children}
    </Styled>
  );
};

export default Button;
