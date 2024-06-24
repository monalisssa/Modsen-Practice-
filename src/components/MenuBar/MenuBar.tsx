import React, {useState} from 'react';
import {MenuBarContainer} from "./styledMenuBar";
import Index from "./SearchSidebar/SearchButton";

import {MenuBarButton} from "./SearchSidebar/SearchButton/styled";
import search_icon from "../../assets/images/search_icon.svg"
import SearchSidebar from "./SearchSidebar/SearchSidebar";
import {Map, SearchControl, YMaps} from "@pbe/react-yandex-maps";


const MenuBar = () => {
    const [openSearchSideBar, setOpenSearchSideBar] = useState(false)
    return (
        <>

            <MenuBarContainer>
                <MenuBarButton icon={search_icon} onClick={() => setOpenSearchSideBar(!openSearchSideBar)} />
                <MenuBarButton icon={search_icon} onClick={() => setOpenSearchSideBar(!openSearchSideBar)} />
            </MenuBarContainer>
            {
                openSearchSideBar && <SearchSidebar open={openSearchSideBar} />
            }
        </>


    );
};

export default MenuBar;