import React, { useState } from 'react';
import { MenuBarButtonsContainer, MenuBarContainer } from './styled';
import search_icon from '../../assets/images/search_icon.svg';
import favorites_icon from '../../assets/images/favorites_icon.svg';
import auth_icon from '../../assets/images/auth_icon.svg';
import user_icon from '../../assets/images/user_icon.png';
import warning from '../../assets/images/warning.png';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import SearchSidebar from '../SearchSidebar';
import FavoritesSidebar from '../FavoritesSidebar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { removeUser } from '../../store/reducers/userSlice';
import Notification from '../UI/Notification';

const MenuBar = () => {
  const [openSearchSideBar, setOpenSearchSideBar] = useState(false);
  const [openFavoritesSideBar, setOpenFavoritesSideBar] = useState(false);
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [notification, setNotification] = useState(false);

  const handleOpenSearchBar = () => {
    if (openFavoritesSideBar) {
      setOpenFavoritesSideBar(false);
    }
    setOpenSearchSideBar(!openSearchSideBar);
  };

  const handleOpenFavoritesSidebar = () => {
    if (openSearchSideBar) {
      setOpenSearchSideBar(false);
    }
    setOpenFavoritesSideBar(!openFavoritesSideBar);
  };

  const handleExit = () => {
    dispatch(removeUser());
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 4000);
  };
  return (
    <>
      <MenuBarContainer>
        <MenuBarButtonsContainer>
          <Button
            icon={search_icon}
            onClick={handleOpenSearchBar}
            bgColor={'#5E7BC7'}
            width={'90%'}
            iconColor={'#777'}
          />
          <Button
            icon={favorites_icon}
            onClick={handleOpenFavoritesSidebar}
            bgColor={'#C75E5E'}
            width={'90%'}
            iconColor={'#777'}
          />
        </MenuBarButtonsContainer>

        {!user.isAuth ? (
          <Link to="/login">
            <Button icon={auth_icon} bgColor={'#808080'} width={'90%'} iconColor={'#777'} />
          </Link>
        ) : (
          <img width={50} src={user_icon} onClick={handleExit} />
        )}
      </MenuBarContainer>
      {openSearchSideBar && <SearchSidebar open={openSearchSideBar} />}
      {openFavoritesSideBar && <FavoritesSidebar open={openFavoritesSideBar} />}
      {notification && (
        <Notification bgColor={'#405F7B'} icon={warning}>
          Вы вышли из аккаунта!
        </Notification>
      )}
    </>
  );
};

export default MenuBar;
