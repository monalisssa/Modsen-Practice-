import React from 'react';

type ClickHandler = () => void | ((email: string, pass: string) => void);

export interface ButtonProps {
  icon?: any;
  text?: string;
  bgColor: string;
  iconColor: string;
  width: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: ClickHandler;
  children?: React.ReactNode;
}
