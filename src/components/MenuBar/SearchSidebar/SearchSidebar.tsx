import React, {useState} from 'react';
import {DrawerWrapper} from "./styledSearchSidebar";
import SearchField from "./SearchField/SearchField";
import CategoriesSelectField from "./CategoriesSelectField/CategoriesSelectField";
import SearchButton from "./SearchButton/SearchButton";
import InputRadiusField from "./InputRadiusField/InputRadiusField";
import Button from "../../UI/Button/Button";
import search_icon from "../../../assets/images/search_icon.svg"

interface SidebarProps {
    open: boolean,
    handleSearchObjects?: (value: string) => void,
    handleRadiusChange?: (value: number) => void
}

const SearchSidebar: React.FC<SidebarProps> = ({open, handleSearchObjects, handleRadiusChange}) => {

    const [searchStr, setSearchStr] = useState("")

    const handleClickSearchButton = () =>
    {
        if (searchStr.trim() !== "") {
            handleSearchObjects(searchStr);
        }
    }

    const handleChangeSearchInput = (str: string) =>
    {
        setSearchStr(str)
    }

    return (
        <DrawerWrapper open={open} >
            <SearchField handleChangeSearchInput={handleChangeSearchInput}/>
            <CategoriesSelectField/>
            <InputRadiusField handleRadiusChange={handleRadiusChange}/>
            <Button icon={search_icon} bg_color={"#5E7BC7"} width={"100%"} handleSetSearchStr={handleClickSearchButton}/>
        </DrawerWrapper>
    );
};
export default SearchSidebar;