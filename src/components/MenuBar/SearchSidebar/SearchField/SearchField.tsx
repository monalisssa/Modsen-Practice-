import React from 'react';
import {SearchInput} from "./styledSearchInput";
import search_icon from "../../../../assets/images/search_icon.svg"

interface SearchFieldProps {
    handleChangeSearchInput?: (value: string) => void
}

const SearchField = ({handleChangeSearchInput}: SearchFieldProps) => {
    return (
        <SearchInput icon={search_icon} onChange={(event) => handleChangeSearchInput(event.target.value)}/>
    );
};

export default SearchField;