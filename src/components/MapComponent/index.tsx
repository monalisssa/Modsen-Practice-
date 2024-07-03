import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Map,
    Placemark,
    Circle,
} from "@pbe/react-yandex-maps";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import useGeoLocation from "../../hooks/useGeolocation";
import {setSearchObject} from "../../store/reducers/geoObjectsSlice";
import {GeoObject} from "../../types/name";
import GeoObjectPlacemark from "../GeoObjectPlacemark";
import MapSearchControl from "../MapSearchControl";
import MapRoute from "../MapRoute";

const circleOptions = {
    draggable: true,
    fillColor: "#5E7BC733",
    strokeColor: "#990066",
    strokeOpacity: 0.8,
    strokeWidth: 5,
};

const MapComponent = () => {

     const {location: userLocation, location_error, refresh} = useGeoLocation()
     const geoObjects = useAppSelector(state => state.geoObjectsReducer)
     const dispatch = useAppDispatch()
     const map = useRef(null);
     const [ymaps, setYmaps] = useState(null);

    useEffect(() => {
        if(userLocation) dispatch(setSearchObject({name: "", point: [userLocation.latitude, userLocation.longitude]}))
     }, [userLocation]);



    if (!userLocation) {
        return <div>Loading...</div>;
    }

    return (
            <Map
                defaultState={{
                    center: geoObjects.searchObject.point,
                    zoom: 17,
                }}
                instanceRef={map}
                width={1535}
                height={735}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint', "multiRouter.MultiRoute" ]}
                onLoad={ymaps => setYmaps(ymaps)}

            >

                <MapSearchControl />
                {
                    geoObjects.routeToObject &&
                    <MapRoute map={map} ymaps={ymaps} item={geoObjects.routeToObject}/>
                }

                <Placemark
                    geometry={geoObjects.searchObject.point}
                    options={{
                        zIndex: 100,
                    }}
                />

                {geoObjects.items.length > 0 &&
                    geoObjects.items.map((item: GeoObject) => (
                        <GeoObjectPlacemark item={item}/>
                    ))}

                <Circle
                    geometry={[geoObjects.searchObject.point, geoObjects.radius + 50]}
                    options={circleOptions}
                />
            </Map>
    );
};

export default MapComponent;