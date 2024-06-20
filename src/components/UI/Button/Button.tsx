import React from 'react';
import search_icon from "../../../assets/images/search_icon.svg";
import {MenuBarButton} from "../../MenuBar/SearchSidebar/SearchButton/styled";
import {StyledButton} from "./styledButton";


interface ButtonProps {
    icon: React.ReactNode;
    bg_color: string;
    width: string;
    onClick?: () => void;
}



const Button: React.FC<ButtonProps> = ({ icon, bg_color, width, onClick }) =>
{
    return (
        <StyledButton icon={icon} bg_color={bg_color} width={width}  onClick={onClick}/>
    );
};
export default Button;