import React, { useEffect, useState } from 'react';
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

const SelectedItemCard: React.FC<SelectedItemCardProps> = ({ selectedItem,  handleRemoveItem}) => {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(user.favorites, user.id, selectedItem.id)
      .then((data) => {
        dispatch(setFavorites(data));
        handleRemoveItem();
      })
      .catch((e) => console.log(e.message()));
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);
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
                <b>Адрес:</b> {selectedItem.full_address_name} <br/>
                <b>Расписание:</b> С {selectedItem.schedule.Fri.working_hours[0].from} до{' '}
                {selectedItem.schedule.Fri.working_hours[0].to}
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
