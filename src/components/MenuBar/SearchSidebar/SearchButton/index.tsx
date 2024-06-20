import React, {useState} from 'react';
import {MenuBarButton} from "./styled";
import search_icon from "../../../../assets/images/search_icon.svg"

const SearchButton = () => {
    const [openSearchSideBar, setOpenSearchSideBar] = useState(false)
    return (
        <MenuBarButton icon={search_icon} onClick={() => setOpenSearchSideBar(true)}/>
    );
};

export default SearchButton;