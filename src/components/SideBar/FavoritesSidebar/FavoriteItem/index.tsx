import React from 'react';

import favorites from "../../../../assets/images/favorites_icon_2.svg";
import geolocation from "../../../../assets/images/geolocation_icon.png";
import {
    FavoriteCardButtons,
    FavoriteCardHeader,
    FavoriteCardWrapper,
    FavoriteImageBox,
    FavoriteImageDescription
} from "./styled";
import test from "../../../../assets/images/test.png"
import {InfoCardButtons} from "../../SearchSideBar/InfoCard/styled";
import {GeoObject} from "../../../../../types";


const FavoriteItem = ({item, onClick}: { item: GeoObject, onClick?: () => void }) => {
    return (
        <FavoriteCardWrapper onClick = {onClick}>
            <FavoriteCardHeader>
                <FavoriteImageBox>
                    <img src={item.external_content[0].main_photo_url}/>
                </FavoriteImageBox>
                <h2>{item.name}</h2>
            </FavoriteCardHeader>

            <FavoriteImageDescription >
                {item.full_address_name}
                {item.description}
            </FavoriteImageDescription>

            <FavoriteCardButtons>
               <img src={favorites} />
                &#9658;
            </FavoriteCardButtons>

        </FavoriteCardWrapper>
    );
};

export default FavoriteItem;