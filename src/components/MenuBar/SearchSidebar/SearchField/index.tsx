import React, {useEffect, useState} from 'react';
import {SearchInput} from "./styled";
import search_icon from "../../../../assets/images/search_icon_2.svg"
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setSearchObject} from "../../../../store/reducers/geoObjectsSlice";




const SearchField = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useAppDispatch();

    const geoObjects = useAppSelector((state) => state.geoObjectsReducer);

    const handleSearchValues = () =>
    {
        dispatch(setSearchObject({name: searchValue, point: [0,0]}))
    }
    return (
        <><SearchInput icon={search_icon} onChange={(e) => setSearchValue(e.target.value)} placeholder="Поиск места..."/>
    <button onClick={handleSearchValues}>РУН</button></>
    );
};

export default SearchField;