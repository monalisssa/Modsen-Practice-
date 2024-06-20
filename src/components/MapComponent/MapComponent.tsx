import React, {useEffect, useRef, useState} from 'react';
import {YMaps, Map, Panorama, GeolocationControl, Placemark, Circle, SearchControl} from "@pbe/react-yandex-maps";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import useGeoLocation from "../../hooks/useGeolocation";
import {setCoordinates} from "../../store/reducers/GeoObjectsSlice";


const MapComponent = () => {

     const {location: userLocation, location_error, refresh} = useGeoLocation()
     const [icons, setIcons] = useState([])
     const geoObjects = useAppSelector(state => state.geoObjectsReducer)
     const dispatch = useAppDispatch()
     const [curCoordinates, setCurCoordinates] = useState([])

    const searchRef = useRef(null);
    useEffect(() => {
        if(userLocation) dispatch(setCoordinates([userLocation.latitude, userLocation.longitude]))
    }, [userLocation]);


    useEffect(() => {
        if (searchRef.current) {
            const searchControl = searchRef.current;
            const onLoad = (event: { get: (arg0: string) => any; }) => {
                if (!event.get('skip')) {
                    searchControl.showResult(searchControl.getResult(0));
                }
            };

            searchControl.events.add('load', onLoad);

            return () => {
                searchControl.events.remove('load', onLoad);
            };
        }
    }, []);

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.search(geoObjects.geo_objects.name);
        }
    }, [geoObjects.coordinates]);


    if (!userLocation) {
        return <div>Loading...</div>;
    }



    return (
        <>

                <Map
                    defaultState={{
                        center: geoObjects.coordinates,
                        zoom: 15,
                        controls: [],
                    }}
                    width={1500}
                    height={740}
                >
                    <GeolocationControl options={{ float: "left" }} />


                    <Placemark
                        geometry={geoObjects.coordinates}
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
                            visible: false
                        }}


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
                        geometry={[geoObjects.coordinates, Number(geoObjects.radius + 100)]}
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