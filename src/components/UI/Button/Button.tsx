import React from 'react';
import {StyledButton, IconWrapper} from "./styledButton";


interface ButtonProps {
    icon?: any;
    text?: string,
    bg_color: string;
    icon_color: string,
    width: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void | ((email: string, pass: string) => void);
    children?: React.ReactNode;
}



const Button: React.FC<ButtonProps> = ({icon, icon_color, bg_color, width, onClick, children, type}) => {
    return (
        <StyledButton
            bg_color={bg_color}
            width={width}
            onClick={onClick}
            type={type}
        >
            {icon &&
                    <img src={icon}/>}
            {children}
        </StyledButton>
    );
};

export default Button