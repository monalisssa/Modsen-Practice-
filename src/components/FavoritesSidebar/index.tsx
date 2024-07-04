import React, { useEffect, useMemo, useState } from 'react';
import { DrawerWrapper } from '../SearchSidebar/styled';
import SearchField from '../SearchField';
import { GeoObject } from '../../types/name';
import GeoObjectCard from '../GeoObjectCard';
import { FavoriteItemList } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFavorites } from '../../store/reducers/userSlice';
import SelectedItemCard from '../SelectedItemCard';
import { getFavoriteItems } from '../../api/firebaseFavoritesApi';
import Loading from '../UI/Loading';
import { FavoritesSidebarProperties } from './types';
import { isEqual } from 'lodash';
import Notification from '../UI/Notification';
import warning from '../../assets/images/warning.png';
import { CloseButton } from '../MapRoute/styled';

const FavoritesSidebar: React.FC<FavoritesSidebarProperties> = ({ open, handleClose }) => {
  const [selectedObject, setSelectedObject] = useState<GeoObject>(null);
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);

  const memoizedFavorites = useMemo(() => user.favorites, [user.favorites]);

  useEffect(() => {
    setLoading(true);
    if (user.isAuth) {
      getFavoriteItems(user.id)
        .then((data) => {
          if (!isEqual(data, memoizedFavorites)) {
            dispatch(setFavorites(data));
          }
          setLoading(false);
        })
        .catch((e) => console.log(e.message()));
    } else setTimeout(() => setLoading(false), 1000);
  }, [user.isAuth, memoizedFavorites]);

  const handleSetSelectedItem = (item: GeoObject | null) => {
    setSelectedObject(item);
  };

  const handleRemoveItem = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 4000);
  };
  return (
    <>
      <DrawerWrapper open={open}>
        <CloseButton onClick={handleClose} />
        <SearchField />
        {selectedObject ? (
          <>
            <h3 onClick={() => handleSetSelectedItem(null)}>&#9668; Избранные</h3>
            <SelectedItemCard selectedItem={selectedObject} handleRemoveItem={handleRemoveItem} />
          </>
        ) : (
          <FavoriteItemList>
            <h3>Избранное:</h3>
            {!user.isAuth ? (
              <p>Необходимо войти!</p>
            ) : loading ? (
              <Loading />
            ) : user.favorites.length > 0 ? (
              user.favorites.map((item) => (
                <GeoObjectCard item={item} selectItem={handleSetSelectedItem} key={item.id} />
              ))
            ) : (
              <p>Нет ни одного избранного места!</p>
            )}
          </FavoriteItemList>
        )}
      </DrawerWrapper>
      {notification && (
        <Notification bgColor={'#C75E5E'} icon={warning}>
          Место успешно удалено из избранного!
        </Notification>
      )}
    </>
  );
};

export default FavoritesSidebar;
