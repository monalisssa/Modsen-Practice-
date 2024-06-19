import React from 'react';
import search_icon from "../../../assets/images/search_icon.svg";
import {MenuBarButton} from "../../MenuBar/SearchSidebar/SearchButton/styledSearchButton";
import {StyledButton} from "./styledButton";

// @ts-ignore
const Button: React.FC<{
    icon: any;
    bg_color: string;
    width: string;
    handleSetSearchStr: (str: string) => void; }> = ({ icon, bg_color, width, handleSetSearchStr }) => {
    const handleClick = () => {
        handleSetSearchStr("new search string");
    };

    return (
        <StyledButton icon={icon} bg_color={bg_color} width={width} onClick={handleClick} />
    );
};
export default Button;