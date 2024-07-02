import React, {ReactNode, useState} from 'react';
import {Placemark} from "@pbe/react-yandex-maps";
import {Portal} from "../Portal";
import CustomBalloon from "../CustomBalloon";
import {GeoObject} from "../../../../types";
import {useAppSelector} from "../../../hooks/redux";


interface GeoObjectPlacemarkProps {
    item: GeoObject;
}

const GeoObjectPlacemark: React.FC<GeoObjectPlacemarkProps> = ({ item }) => {

    const [activePortal, setActivePortal ] = useState(false)
    const geoObjects = useAppSelector(state => state.geoObjectsReducer)

    const getPlacemarkOptions = (object: GeoObject) => {
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

    const handleSetActivePortal = () =>
    {
        setActivePortal(!activePortal)
    }
    return (
        <>
            <Placemark
                key={item.id}
                geometry={[item.point.lat, item.point.lon]}
                options={getPlacemarkOptions(item)}
                properties={{
                    balloonContent: '<div id="custom-balloon" class="balloon-card"></div>'
                }}
                onBalloonOpen={handleSetActivePortal}
                onBalloonClose={handleSetActivePortal}
            />
            {
                activePortal &&
                <Portal elementId={ 'custom-balloon' }>
                    <CustomBalloon item={item}/>
                </Portal>
            }
        </>

    );
};

export default GeoObjectPlacemark;