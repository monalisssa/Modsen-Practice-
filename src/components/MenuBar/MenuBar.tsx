import React, {useState} from 'react';
import {MenuBarContainer} from "./styledMenuBar";
import SearchButton from "./SearchSidebar/SearchButton/SearchButton";

import {MenuBarButton} from "./SearchSidebar/SearchButton/styledSearchButton";
import search_icon from "../../assets/images/search_icon.svg"
import SearchSidebar from "./SearchSidebar/SearchSidebar";

interface MenuBarProps {
    handleSearchObjects?: (value: unknown) => void,
    handleRadiusChange?: (value: number) => void,
}

const MenuBar = ({handleSearchObjects, handleRadiusChange}: MenuBarProps) => {
    const [openSearchSideBar, setOpenSearchSideBar] = useState(false)
    return (
        <>
            <MenuBarContainer>
                <MenuBarButton icon={search_icon} onClick={() => setOpenSearchSideBar(!openSearchSideBar)} />
            </MenuBarContainer>
            {
                openSearchSideBar && <SearchSidebar open={openSearchSideBar} handleSearchObjects={handleSearchObjects} handleRadiusChange={handleRadiusChange}/>
            }
        </>


    );
};

export default MenuBar;