import React, {useState} from 'react';
import {MenuBarButtonsContainer, MenuBarContainer} from "./styled";
import search_icon from "../../assets/images/search_icon.svg"
import favorites_icon from "../../assets/images/favorites_icon.svg"
import auth_icon from "../../assets/images/auth_icon.svg"
import SideBar from "./SearchSidebar";
import Button from "../UI/Button/Button";
import {Link, useLocation} from "react-router-dom";
import {GeoObject} from "../../../types";



interface MenuBarProperties {
    selectedObject: GeoObject,
    setSelectedObject: (item: GeoObject) => void;
}

const MenuBar = ({ selectedObject, setSelectedObject}: MenuBarProperties) => {
    const [openSearchSideBar, setOpenSearchSideBar] = useState(false)
    return (
        <>
            <MenuBarContainer>
                <MenuBarButtonsContainer>
                    <Button icon={search_icon} onClick={() => setOpenSearchSideBar(!openSearchSideBar)} bg_color={"#5E7BC7"} width={"90%"} icon_color={"#777"}/>
                    <Button icon={favorites_icon} onClick={() => setOpenSearchSideBar(!openSearchSideBar)} bg_color={"#C75E5E"} width={"90%"} icon_color={"#777"}/>
                </MenuBarButtonsContainer>

                <Link to="/login">
                <Button icon={auth_icon}
                        bg_color={"#808080"} width={"90%"} icon_color={"#777"}/>
                </Link>
            </MenuBarContainer>
            {
                openSearchSideBar && <SideBar open={openSearchSideBar} selectedObject={selectedObject} setSelectedObject={setSelectedObject}/>
            }
        </>


    );
};

export default MenuBar;