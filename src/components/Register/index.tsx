import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../hooks/redux';
import Modal from '../Modal';
import { setUser } from '../../store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Notification from '../UI/Notification';
import warning from '../../assets/images/warning.png';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [notification, setNotification] = useState(false);
  const handleViewNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 4000);
  };
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      <Modal type="register" handleSubmitForm={handleRegister} />

      {notification && (
        <Notification bgColor={'#ec5353'} icon={warning}>
          Пользователь с такой почтой или паролем уже существует!
        </Notification>
      )}
    </>
  );
};

export default Register;
