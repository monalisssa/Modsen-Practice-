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
import {getDatabase, ref, runTransaction, get} from "firebase/database";
import {setFavorites} from "../../../../store/reducers/userSlice";


const InfoCard = ({ selectedObject }: { selectedObject: GeoObject }) => {

    const user = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch()
    const [isFavorite, setIsFavorite] = useState(false)

    const database = getDatabase();
    const favoritesRef = ref(database, 'favorites/' + user.id);

    useEffect(() => {
       if (user.favorites.find(item => selectedObject.id === item.id)) setIsFavorite(true)
        else setIsFavorite(false)
    }, [user.favorites]);


    const handleRemoveFromFavorites = () => {
        if(user.isAuth) {
            runTransaction(favoritesRef, (favoritesData) => {
                if (favoritesData && favoritesData.items) {
                    favoritesData.items = favoritesData.items.filter((item: GeoObject) => item.id !== selectedObject.id);
                }
                return favoritesData;
            })
                .then((transactionResult) => {
                    const updatedData = transactionResult.snapshot.val();
                    dispatch(setFavorites(updatedData.items));
                })
                .catch((error) => {
                    console.error('Ошибка при удалении элемента из базы данных:', error);
                });
        }
    };

    const handleAddToFavorites = () => {
        if(user.isAuth) {
            runTransaction(favoritesRef, (favoritesData) => {
                if (!favoritesData) {
                    favoritesData = { items: [] };
                }
                const existingItem = favoritesData.items.find((item: GeoObject) => item.id === selectedObject.id);
                if (!existingItem) {
                    favoritesData.items.push(selectedObject);
                }
                return favoritesData;
            })
                .then((transactionResult) => {
                    const updatedData = transactionResult.snapshot.val();
                    dispatch(setFavorites(updatedData.items));
                })
                .catch((error) => {
                    console.error('Ошибка при добавлении элементов в базу данных:', error);
                });
        }
    };

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
                        {selectedObject.description}
                    </p>
                </InfoCardDescription>
                
                <InfoCardButtons>
                    {
                        !isFavorite ? <Button bgColor={"#C75E5E"} iconColor={"#fff"} width={"45%"} icon={favorites} type="button" onClick={handleAddToFavorites}>В избранное</Button>
                            :  <Button bgColor={"transparent"} iconColor={"#fff"} width={"45%"} icon={favorites_1} type="reset" onClick={handleRemoveFromFavorites}>Сохранено</Button>
                    }
                    <Button bgColor={"#5E7BC7"} iconColor={"#fff"} width={"45%"} type="button" icon={geolocation} >Маршрут</Button>
                </InfoCardButtons>
            </InfoCardContent>
        </InfoCardWrapper>
    );
};

export default InfoCard;