import React from 'react';
import {InfoCardContent, InfoCardDescription, InfoCardIcons, InfoCardImageBox, InfoCardWrapper} from "./styled";
import icon_1 from "../../../assets/images/categoriesIcons/history.svg"
import {GeoObject} from "../../../../types";


const InfoCard = ({ selectedObject }: { selectedObject: GeoObject }) => {
    return (
        <InfoCardWrapper>
            <InfoCardImageBox>
                {
                    selectedObject.external_content.length > 0 &&
                    <img src={selectedObject.external_content[0].main_photo_url}/>
                }
            </InfoCardImageBox>

            <InfoCardContent >
                <InfoCardIcons>

                </InfoCardIcons>

                <InfoCardDescription>
                    <h2>{selectedObject.name}</h2>
                    <p>
                        Адрес: {selectedObject.full_address_name}
                        {selectedObject.description && selectedObject.description}
                    </p>
                </InfoCardDescription>
            </InfoCardContent>
        </InfoCardWrapper>
    );
};

export default InfoCard;