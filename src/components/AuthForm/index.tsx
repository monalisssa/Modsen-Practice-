import React, { FC } from 'react';
import { ModalContent, InputField, Modal, ModalHeader, ModalContainer, InputBox } from './styled';

import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { useFormik } from 'formik';
import { basicSchema, FormProps, FormValues } from './types';

const Form: FC<FormProps> = ({ type, handleSubmitForm }) => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<FormValues>(
    {
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: basicSchema,
      onSubmit: (values) => {
        handleSubmitForm(values.email, values.password);
      },
    },
  );

  console.log(errors);

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      navigate('/');
    }
  };

  return (
    <ModalContainer onClick={handleCloseModal}>
      <Modal>
        <ModalHeader>{type === 'login' ? 'Авторизация' : 'Регистрация'}</ModalHeader>
        <ModalContent onSubmit={handleSubmit}>
          <InputBox>
            <InputField
              id="email"
              placeholder="Почта"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              isError={errors.email && touched.email}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
          </InputBox>

          <InputBox>
            <InputField
              id="password"
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              isError={errors.password && touched.password}
            />
            {errors.password && touched.password && <p>{errors.password}</p>}
          </InputBox>

          <Button bgColor={'#C75E5E'} iconColor={'#000'} width={'90%'} type="submit">
            {type === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </Button>
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
      </Modal>
    </ModalContainer>
  );
};

export default Form;
