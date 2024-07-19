import React, { FC } from 'react';
import { ModalContent, ModalHeader, ModalContainer } from './styled';

import { Link, useNavigate } from 'react-router-dom';
import { ModalProps } from './types';
import Form from '../Form';

const Modal: FC<ModalProps> = ({ type, handleSubmitForm }) => {
  const navigate = useNavigate();
  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      navigate('/');
    }
  };

  return (
    <ModalContainer onClick={handleCloseModal}>
      <ModalContent>
        <ModalHeader>{type === 'login' ? 'Авторизация' : 'Регистрация'}</ModalHeader>
        <Form submitForm={handleSubmitForm} type={type} />
        {type === 'login' ? (
          <h4>
            Нет аккаунта?
            <Link to={'/register'}> Регистрация!</Link>
          </h4>
        ) : (
          <h4>
            Есть аккаунт?
            <Link to={'/login'}> Авторизация!</Link>
          </h4>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
