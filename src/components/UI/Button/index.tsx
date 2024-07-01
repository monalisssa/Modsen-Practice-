import React from 'react';
import {Styled, IconWrapper} from "./styled";


interface ButtonProps {
    icon?: any;
    text?: string,
    bgColor: string;
    iconColor: string,
    width: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void | ((email: string, pass: string) => void);
    children?: React.ReactNode;
}



const Button: React.FC<ButtonProps> = ({icon, iconColor, bgColor, width, onClick, children, type}) => {
    return (
        <Styled
            bgColor={bg_color}
            width={width}
            onClick={onClick}
            type={type}
        >
            {icon &&
                    <img src={icon}/>}
            {children}
        </Styled>
    );
};

export default Button