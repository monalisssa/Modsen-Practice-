import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Map,
    GeolocationControl,
    Placemark,
    Circle,
    SearchControl,
} from "@pbe/react-yandex-maps";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import useGeoLocation from "../../hooks/useGeolocation";
import {setSearchObject} from "../../store/reducers/geoObjectsSlice";
import {GeoObject} from "../../../types";



interface MapComponentProps {
    selectObject: (item: GeoObject) => void;
}

const circleOptions = {
    draggable: true,
    fillColor: "#5E7BC733",
    strokeColor: "#990066",
    strokeOpacity: 0.8,
    strokeWidth: 5,
};



const MapComponent = ({ selectObject }: MapComponentProps) => {

     const {location: userLocation, location_error, refresh} = useGeoLocation()
     const geoObjects = useAppSelector(state => state.geoObjectsReducer)
     const dispatch = useAppDispatch()
     const searchRef = useRef(null);

     useEffect(() => {
        if(userLocation) dispatch(setSearchObject({name: "", point: [userLocation.latitude, userLocation.longitude]}))
     }, [userLocation]);


     useEffect(() => {
        if (searchRef.current) {
            searchRef.current.search(geoObjects.searchObject.name).then(function () {
                    const geoObjectsArray = searchRef.current.getResultsArray();
                    if (geoObjectsArray.length) {
                        dispatch(setSearchObject({name: geoObjects.searchObject.name, point: geoObjectsArray[0].geometry._coordinates}))

                    }
                });
            }

    }, [geoObjects.searchObject.name]);

    const getPlacemarkOptions = (object: GeoObject, geoObjects: any) => {
        const matchingCategory = geoObjects.filters.find((category: any) =>
            object.rubrics.some((rubric: any) =>
                category.categories.includes(Number(rubric.id))
            )
        );
        return {
            iconLayout: 'default#image',
            iconImageHref: matchingCategory?.url,
            iconImageSize: [30, 42],
        };
    };

    if (!userLocation) {
        return <div>Loading...</div>;
    }

    const handleResultHide = () =>
    {
        searchRef.current.clear();
    }
    return (
        <>
                <Map
                    defaultState={{
                        center: geoObjects.searchObject.point,
                        zoom: 17,
                        controls: [],

                    }}
                    defaultOptions={{
                        yandexMapDisablePoiInteractivity: true
                    }}
                    width={1535}
                    height={735}
                >
                    <GeolocationControl options={{ float: "left" }} />

                    <Placemark
                        geometry={geoObjects.searchObject.point}
                        options={{
                            zIndex: 100,
                        }}
                    />

                    <SearchControl
                        instanceRef={(ref) => {
                            searchRef.current = ref;
                        }}
                        options={{
                            provider: 'yandex#search',
                            noSelect: true,
                            visible: false
                        }}
                        onResultShow = {handleResultHide}
                    />

                    {geoObjects.items && geoObjects.items.length > 0 &&
                        geoObjects.items.map((object: GeoObject) => (
                            <Placemark
                                key={object.id}
                                geometry={[object.point.lat, object.point.lon]}
                                options={getPlacemarkOptions(object, geoObjects)}
                                onClick={() => selectObject(object)}
                            />
                        ))}

                    <Circle
                        geometry={[geoObjects.searchObject.point, geoObjects.radius + 50]}
                        options={circleOptions}
                    />

                </Map>
        </>

    );
};

export default MapComponent;