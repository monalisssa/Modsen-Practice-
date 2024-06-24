import React, {useEffect, useRef, useState} from 'react';
import {
    YMaps,
    Map,
    Panorama,
    GeolocationControl,
    Placemark,
    Circle,
    SearchControl,
    ZoomControl
} from "@pbe/react-yandex-maps";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import useGeoLocation from "../../hooks/useGeolocation";
import {setSearchObject} from "../../store/reducers/geoObjectsSlice";


const MapComponent = () => {

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
                    width={1500}
                    height={730}
                >
                    <GeolocationControl options={{ float: "left" }} />

                    <ZoomControl />
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
                            float: 'right',
                            maxWidth: 190,
                            provider: 'yandex#search',
                            noSelect: true,
                            visible: false,
                            noPlacemark: true,

                        }}
                        onResultShow = {handleResultHide}
                    />

                    {geoObjects.geo_objects && geoObjects.geo_objects.length > 0 &&
                        geoObjects.geo_objects.map((object: { id: number; point: { lat: number; lon: number}; rubrics: any[]; }) => (
                            <Placemark
                                key={object.id}
                                geometry={[object.point.lat, object.point.lon]}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: geoObjects.filters.find((category) =>
                                        object.rubrics.some((rubric) =>
                                            category.category_id.includes(Number(rubric.id))
                                        )
                                    )?.url,
                                    iconImageSize: [30, 42],
                                }}
                            />
                        ))}

                    <Circle
                        geometry={[geoObjects.searchObject.point, geoObjects.radius + 50]}
                        options={{
                            draggable: true,
                            fillColor: "#DB709377",
                            strokeColor: "#990066",
                            strokeOpacity: 0.8,
                            strokeWidth: 5,
                        }}
                    />

                </Map>



        </>


    );
};

export default MapComponent;