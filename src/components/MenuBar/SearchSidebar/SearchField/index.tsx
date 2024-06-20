import React, {useEffect, useState} from 'react';
import {SearchInput} from "./styled";
import search_icon from "../../../../assets/images/search_icon.svg"
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setCoordinates} from "../../../../store/reducers/GeoObjectsSlice";
import {fetchOneGeoObject} from "../../../../store/actions/GeoObjectsActions";



const SearchField = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useAppDispatch();

    const geoObjects = useAppSelector((state) => state.geoObjectsReducer);


    const handleSearchValues = () =>
    {
        dispatch(fetchOneGeoObject(searchValue))
    }
    return (
        <><SearchInput icon={search_icon} onChange={(e) => setSearchValue(e.target.value)}/>
    <button onClick={handleSearchValues}>РУН</button></>
    );
};

export default SearchField;