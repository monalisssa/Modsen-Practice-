import React, {useEffect, useState} from 'react';
import {
    InfoCardButtons,
    InfoCardContent,
    InfoCardDescription,
    InfoCardIcons,
    InfoCardImageBox,
    InfoCardWrapper
} from "./styled";
import favorites from "../../../../assets/images/favorites_icon.svg"
import favorites_1 from "../../../../assets/images/favorites.svg"
import geolocation from "../../../../assets/images/geolocation_icon.png"
import {GeoObject} from "../../../../../types";
import Button from "../../../UI/Button";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setFavorites} from "../../../../store/reducers/userSlice";
import {addToFavorites, removeFromFavorites} from "../../../../api/firebaseFavoritesApi";
import Loading from "../../../UI/Loading";


const SelectedItemCard = ({ selectedObject, setSelectedItem }: { selectedObject: GeoObject, setSelectedItem: (item: GeoObject) => void }) => {

    const user = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)

    const handleRemoveFromFavorites = () => {
        setLoading(true)
        removeFromFavorites(user.favorites, user.id, selectedObject.id)
            .then( data =>
            {
                setLoading(false)
                dispatch(setFavorites(data))
                setSelectedItem(null)
            })
            .catch(e => console.log(e.message()))
    };

    return (
        <>
        {
            loading ? <Loading />
                :
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
                                {selectedObject.description}
                            </p>
                        </InfoCardDescription>

                        <InfoCardButtons>
                            <Button bgColor={"transparent"} iconColor={"#fff"} width={"45%"} icon={favorites_1} type="reset" onClick={handleRemoveFromFavorites}>Сохранено</Button>
                            <Button bgColor={"#5E7BC7"} iconColor={"#fff"} width={"45%"} type="button" icon={geolocation} >Маршрут</Button>
                        </InfoCardButtons>
                    </InfoCardContent>
                </InfoCardWrapper>
        }
        </>
    );

};

export default SelectedItemCard;