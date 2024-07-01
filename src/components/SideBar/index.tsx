import React from 'react';
import {DrawerWrapper} from "./styled";
import search_icon from "../../assets/images/search_icon.svg"
import SearchField from "./SearchBar";
import CategoriesSelect from "./CategoriesSelect";
import RadiusField from "./RadiusField";
import {fetchGeoObjects} from "../../store/actions/geoObjectsActions";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import InfoCard from "./InfoCard";
import {GeoObject} from "../../../types";
import Button from "../UI/Button";


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
                    <CategoriesSelect/>
                    <RadiusField />
                    <Button icon={search_icon} onClick={handleLoadGeoObjects} bgColor={"#5E7BC7"} width={"100%"} iconColor={"#777"}/>
                </>
                }

            </DrawerWrapper>


        </>

    );
};
export default SideBar;