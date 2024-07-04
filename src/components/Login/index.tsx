import React, { useState } from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Modal from '../Modal';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import Notification from '../UI/Notification';
import warning from '../../assets/images/warning.png';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [notification, setNotification] = useState(false);

  const handleViewNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 4000);
  };

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/');
      })
      .catch(handleViewNotification);
  };

  return (
    <>
      <Modal type="login" handleSubmitForm={handleLogin} />

      {notification && (
        <Notification bgColor={'#ec5353'} icon={warning}>
          Пользователь с такой почтой или паролем уже существует!
        </Notification>
      )}
    </>
  );
};

export default Login;
