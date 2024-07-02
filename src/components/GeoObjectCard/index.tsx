import React from 'react';

import favorites from "../../assets/images/favorites_icon_2.svg";
import geolocation from "../../assets/images/geolocation_icon.png";
import {
    ItemCardButtons,
    ItemCardHeader,
    ItemCardWrapper,
    ItemImageBox,
    ItemCardContent
} from "./styled";


import {GeoObject} from "../../types/name";
import {FavoritesSidebarProperties} from "../FavoritesSidebar/types";
import {GeoObjectCardProps} from "./types";


const GeoObjectCard: React.FC<GeoObjectCardProps> = ({item, selectItem, mapBalloon }) => {

    const handleSelectItem = () => {
        if(!mapBalloon) selectItem(item);
    };

    return (
        <ItemCardWrapper onClick = {handleSelectItem} mapBalloon={mapBalloon}>
            <ItemCardHeader>
                <ItemImageBox>
                    <img src={item.external_content[0].main_photo_url}/>
                </ItemImageBox>
                <h2>{item.name}</h2>
            </ItemCardHeader>

            <ItemCardContent >
                <b>Адрес:</b> {item.full_address_name}
                {item.description}
            </ItemCardContent>

            {
                !mapBalloon &&  <ItemCardButtons>
                    <img src={favorites} />
                    &#9658;
                </ItemCardButtons>
            }


        </ItemCardWrapper>
    );
};

export default GeoObjectCard;