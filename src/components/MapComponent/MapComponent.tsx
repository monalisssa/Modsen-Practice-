import React, {useState} from 'react';
import {YMaps, Map, Panorama, GeolocationControl, Placemark, Circle} from "@pbe/react-yandex-maps";
import useGeoLocation from "../../hooks/useGeolocation";
import history from "../../assets/images/categoriesIcons/history.svg"
import { IGeometry } from 'yandex-maps';

interface MapComponentProps {
    objects?: any
}

const MapComponent = ({objects}: MapComponentProps) => {

    const {location: userLocation, error, refresh} = useGeoLocation();
    const [coordinates, setCoordinates] = useState([])
    if (!userLocation) {
        return <div>Loading...</div>;
    }

    return (
        <Map
            onClick={(e: { get: (arg0: string) => React.SetStateAction<any[]>; }) => setCoordinates(e.get("coords"))}
            defaultState={{
                center: [53.9, 27.5667],
                zoom: 15,
                controls: [],
            }}
            width={1500}
            height={740}
        >
            <GeolocationControl options={{float: "left"}}/>

            <Placemark
                geometry={[53.9, 27.5667]}
            />

            {coordinates.length !== 0 && <Placemark
                geometry={coordinates}
                options={{
                    zIndex: 100
                }}
            />
            }

            {objects &&
                objects.map((object: { point: { lat: number[] | IGeometry[][][]; lon: number[] | IGeometry[][][]; }; }) =>
                    <Placemark
                        geometry={[object.point.lat, object.point.lon]}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: history,
                            iconImageSize: [30, 42]
                        }}
                    />
                )
            }

            <Circle
                geometry={[[userLocation.latitude, userLocation.longitude], 2000]}
                options={{
                    draggable: true,
                    fillColor: "#DB709377",
                    strokeColor: "#990066",
                    strokeOpacity: 0.8,
                    strokeWidth: 5,
                }}
            />
        </Map>


    );
};

export default MapComponent;