import React, {useEffect, useState} from 'react';
import {DrawerWrapper} from "./styledSearchSidebar";
import Button from "../../UI/Button/Button";
import search_icon from "../../../assets/images/search_icon.svg"
import SearchField from "./SearchField";
import CategoriesSelectField from "./CategoriesSelectField";
import RadiusField from "./RadiusField";
import {fetchGeoObjects} from "../../../store/actions/geoObjectsActions";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";


interface SearchSidebarProperties {
    open: boolean;
}

const SearchSidebar = ({ open }: SearchSidebarProperties) => {
    const dispatch = useAppDispatch();
    const geoObjects = useAppSelector((state) => state.geoObjectsReducer);
    const loadGeoObjects = () => {
        dispatch(fetchGeoObjects({ lat: geoObjects.searchObject.point[0], lng: geoObjects.searchObject.point[1] }, geoObjects.radius, geoObjects.filters));

    };

    const [searchValue, setSearchValue] = useState('')
    return (
        <DrawerWrapper open={open}>

            <SearchField />
            <CategoriesSelectField />
            <RadiusField />
            <Button onClick={loadGeoObjects} width={"100%"} bg_color={"#5E7BC7"} icon={search_icon} />
        </DrawerWrapper>
    );
};
export default SearchSidebar;