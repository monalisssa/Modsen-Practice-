import React from 'react';
import {DrawerWrapper} from "./styled";
import Button from "../UI/Button/Button";
import search_icon from "../../assets/images/search_icon.svg"
import SearchField from "./SearchBar";
import CategoriesSelectField from "./CategoriesSelect";
import RadiusField from "./RadiusField";
import {fetchGeoObjects} from "../../store/actions/geoObjectsActions";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import InfoCard from "./InfoCard";
import {GeoObject} from "../../../types";


interface SearchSidebarProperties {
    open: boolean;
    selectedObject: GeoObject,
    setSelectedObject: (item: GeoObject) => void;
}

const SideBar = ({ open, selectedObject, setSelectedObject }: SearchSidebarProperties) => {
    const dispatch = useAppDispatch();
    const geoObjects = useAppSelector((state) => state.geoObjectsReducer);

    const handleLoadGeoObjects = () => {
        dispatch(fetchGeoObjects({ lat: geoObjects.searchObject.point[0],
            lng: geoObjects.searchObject.point[1] }, geoObjects.radius, geoObjects.filters));
    };

    const handleReturnSearch = () => {
        setSelectedObject(null)
    };

    return (
        <>
            <DrawerWrapper open={open}>
                <SearchField />
                {
                    selectedObject ?
                        <>
                            <h3 onClick={handleReturnSearch}>Поиск</h3>
                            <InfoCard selectedObject={selectedObject}/>
                        </>

                :
                <>
                    <CategoriesSelectField />
                    <RadiusField />
                    <Button icon={search_icon} onClick={handleLoadGeoObjects} bg_color={"#5E7BC7"} width={"100%"} icon_color={"#777"}/>
                </>
                }

            </DrawerWrapper>


        </>

    );
};
export default SideBar;