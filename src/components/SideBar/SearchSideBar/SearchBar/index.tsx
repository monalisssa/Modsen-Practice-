import React, {useEffect, useState} from 'react';
import {SearchInput, SearchInputWrapper} from "./styled";
import search_icon from "../../../../assets/images/search_icon_2.svg"
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setSearchObject} from "../../../../store/reducers/geoObjectsSlice";




const SearchField = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useAppDispatch();

    const handleSearchValues = () =>
    {
        dispatch(setSearchObject({name: searchValue, point: [0,0]}))
    }

    const handleChangeSearchValue = (event:  React.ChangeEvent<HTMLInputElement>) => {
       setSearchValue(event.target.value)
    };


    return (
        <SearchInputWrapper>
            <img src={search_icon} onClick={handleSearchValues}/>
            <SearchInput icon={search_icon}
                         onChange={handleChangeSearchValue} placeholder="Место, адрес..."/>

        </SearchInputWrapper>


    );
};

export default SearchField;