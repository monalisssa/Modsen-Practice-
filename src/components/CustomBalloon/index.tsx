import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import GeoObjectCard from '../GeoObjectCard';
import Button from '../UI/Button';
import favorites_1 from '../../assets/images/favorites_icon.svg';
import geolocation from '../../assets/images/geolocation_icon.png';
import { CustomBalloonButtons } from './styled';
import { setFavorites } from '../../store/reducers/userSlice';
import { addToFavorites } from '../../api/firebaseFavoritesApi';
import { CustomBalloonProps } from './types';
import { setRouteToObject } from '../../store/reducers/geoObjectsSlice';
import Notification from '../UI/Notification';
import warning from '../../assets/images/warning.png';

const CustomBalloon: React.FC<CustomBalloonProps> = ({ item, handleCloseBalloon, handleViewNotification, handleViewAuthNotification }) => {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const handleAddToFavorites = () => {
    if (user.isAuth) {
      addToFavorites(user.id, item)
        .then((data) => {
          dispatch(setFavorites(data));
          handleViewNotification();
        })
        .catch((e) => console.log(e.message()));
    } else handleViewAuthNotification()
  };

  const handleSetViewRoute = () => {
    dispatch(setRouteToObject(item));
    handleCloseBalloon();
  };

  return (
    <>
      <GeoObjectCard item={item} mapBalloon={true} />
      <CustomBalloonButtons>
        <Button
          bgColor={'#C75E5E'}
          iconColor={'#fff'}
          width={'45%'}
          icon={favorites_1}
          type="button"
          onClick={handleAddToFavorites}
        >
          В избранное
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
      </CustomBalloonButtons>
    </>
  );
};
export default CustomBalloon;
