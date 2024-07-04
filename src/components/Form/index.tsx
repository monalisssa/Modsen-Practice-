import React, { FC } from 'react';
import Button from '../UI/Button';
import { useFormik } from 'formik';
import { basicSchema, FormProps, FormValues } from './types';
import { SForm, InputBox, InputField } from './styled';

const Form: FC<FormProps> = ({ type, submitForm }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<FormValues>(
    {
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: basicSchema,
      onSubmit: (values) => {
        submitForm(values.email, values.password);
      },
    },
  );
  return (
    <SForm onSubmit={handleSubmit}>
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
    </SForm>
  );
};

export default Form;
