import React, {useState} from 'react';
import {MenuBarContainer} from "./styled";
import {MenuBarButton} from "./SearchSidebar/SearchButton/styled";
import search_icon from "../../assets/images/search_icon.svg"
import SideBar from "./SearchSidebar";



const MenuBar = () => {
    const [openSearchSideBar, setOpenSearchSideBar] = useState(false)
    return (
        <>

            <MenuBarContainer>
                <MenuBarButton icon={search_icon} onClick={() => setOpenSearchSideBar(!openSearchSideBar)} />
                <MenuBarButton icon={search_icon} onClick={() => setOpenSearchSideBar(!openSearchSideBar)} />
            </MenuBarContainer>
            {
                openSearchSideBar && <SideBar open={openSearchSideBar} />
            }
        </>


    );
};

export default MenuBar;