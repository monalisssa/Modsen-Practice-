import React, { useState } from 'react';
import {
  InfoCardButtons,
  InfoCardContent,
  InfoCardDescription,
  InfoCardIcons,
  InfoCardImageBox,
  InfoCardWrapper,
} from './styled';
import favorites_1 from '../../assets/images/favorites.svg';
import geolocation from '../../assets/images/geolocation_icon.png';
import Button from '../UI/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFavorites } from '../../store/reducers/userSlice';
import { removeFromFavorites } from '../../api/firebaseFavoritesApi';
import Loading from '../UI/Loading';
import { SelectedItemCardProps } from './types';
import { setRouteToObject } from '../../store/reducers/geoObjectsSlice';

const SelectedItemCard: React.FC<SelectedItemCardProps> = ({ selectedItem, setSelectedItem }) => {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleRemoveFromFavorites = () => {
    setLoading(true);
    removeFromFavorites(user.favorites, user.id, selectedItem.id)
      .then((data) => {
        setLoading(false);
        dispatch(setFavorites(data));
        setSelectedItem(null);
      })
      .catch((e) => console.log(e.message()));
  };

  const handleSetViewRoute = () => {
    dispatch(setRouteToObject(selectedItem));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <InfoCardWrapper>
          <InfoCardImageBox>
            {selectedItem.external_content.length > 0 && (
              <img src={selectedItem.external_content[0].main_photo_url} />
            )}
          </InfoCardImageBox>

          <InfoCardContent>
            <InfoCardIcons></InfoCardIcons>
            <InfoCardDescription>
              <h2>{selectedItem.name}</h2>
              <p>
                <b>Адрес:</b> {selectedItem.full_address_name}
                {selectedItem.description}
              </p>
            </InfoCardDescription>

            <InfoCardButtons>
              <Button
                bgColor={'transparent'}
                iconColor={'#fff'}
                width={'45%'}
                icon={favorites_1}
                type="reset"
                onClick={handleRemoveFromFavorites}
              >
                Сохранено
              </Button>
              <Button
                bgColor={'#5E7BC7'}
                iconColor={'#fff'}
                width={'45%'}
                type="button"
                icon={geolocation}
                onClick={handleSetViewRoute}
              >
                Маршрут
              </Button>
            </InfoCardButtons>
          </InfoCardContent>
        </InfoCardWrapper>
      )}
    </>
  );
};

export default SelectedItemCard;
