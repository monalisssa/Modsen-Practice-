import React from 'react';
import search_icon from "../../../assets/images/search_icon.svg";
import {MenuBarButton} from "../../MenuBar/SearchSidebar/SearchButton/styled";
import {StyledButton} from "./styledButton";
import {text} from "node:stream/consumers";


interface ButtonProps {
    icon?: React.ReactNode;
    text?: string,
    bg_color: string;
    width: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void | ((email: string, pass: string) => void);
    children?: React.ReactNode;
}



const Button: React.FC<ButtonProps> = ({ icon, bg_color, width, onClick, children, type }) =>
{
    return (
        <StyledButton icon={icon} bg_color={bg_color} width={width}  onClick={onClick} type={type}>{children}</StyledButton>
    );
};
export default Button;