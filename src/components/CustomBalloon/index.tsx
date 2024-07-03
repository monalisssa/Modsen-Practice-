import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import GeoObjectCard from "../GeoObjectCard";
import {GeoObject} from "../../types/name";
import Button from "../UI/Button";
import favorites_1 from "../../assets/images/favorites_icon.svg";
import geolocation from "../../assets/images/geolocation_icon.png";
import {InfoCardButtons} from "../SelectedItemCard/styled";
import {CustomBalloonButtons} from "./styled";
import {setFavorites} from "../../store/reducers/userSlice";
import {addToFavorites} from "../../api/firebaseFavoritesApi";
import {CustomBalloonProps} from "./types";
import MapRoute from "../MapRoute";
import {set} from "@pbe/react-yandex-maps/typings/util/set";
import {setRouteToObject} from "../../store/reducers/geoObjectsSlice";


const CustomBalloon: React.FC<CustomBalloonProps> = ({item, handleCloseBalloon }) => {

    const user = useAppSelector((state) => state.userReducer);
    const geoObjects = useAppSelector((state) => state.geoObjectsReducer);
    const dispatch = useAppDispatch()
    const [isFavorite, setIsFavorite] = useState(false)
    const [viewRoute, setViewRoute] = useState(false)


    useEffect(() => {
        setTimeout(() =>
            {
               // if (user.favorites.find(item => selectedObject.id === item.id)) setIsFavorite(true)
               // else setIsFavorite(false)
            }
            , 500)
    }, [user.favorites]);


    const handleAddToFavorites = () => {

        if(user.isAuth)
        {
            addToFavorites(user.id, item)
                .then( data =>
                {
                    dispatch(setFavorites(data))
                })
                .catch(e => console.log(e.message()))
        }

    };


    const handleSetViewRoute = () =>
    {
        dispatch(setRouteToObject(item))
        handleCloseBalloon()
    }

    return (
        <>
            <GeoObjectCard item={item} mapBalloon={true}/>
            <CustomBalloonButtons>
                <Button bgColor={"#C75E5E"} iconColor={"#fff"} width={"45%"} icon={favorites_1} type="button" onClick={handleAddToFavorites}>В избранное</Button>
                <Button bgColor={"#5E7BC7"} iconColor={"#fff"} width={"45%"} type="button" icon={geolocation} onClick={handleSetViewRoute}>Маршрут</Button>
            </CustomBalloonButtons>

        </>


    );
};
export default CustomBalloon;