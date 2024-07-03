import * as yup from 'yup';

const passwordRules = {
  hasUpperCase: /[A-Z]/, // хотя бы 1 заглавная буква
  hasLowerCase: /[a-z]/, // хотя бы 1 строчная буква
  hasNumber: /\d/, // хотя бы одна цифра
};

export interface FormProps {
  type: string;
  handleSubmitForm: (email: string, pass: string) => void;
}

export interface FormValues {
  email: string;
  password: string;
}

export const basicSchema = yup.object().shape({
  email: yup.string().email('Введите правильный email').required('Обязательное поле'),
  password: yup
    .string()
    .min(8, 'Минимум 8 символов')
    .test(
      'hasUpperCase',
      'Пароль должен содержать хотя бы один символ верхнего регистра',
      (value) => passwordRules.hasUpperCase.test(value),
    )
    .test('hasLowerCase', 'Пароль должен содержать хотя бы один символ нижнего регистра', (value) =>
      passwordRules.hasLowerCase.test(value),
    )
    .test('hasNumber', 'Пароль должен содержать хотя бы одну цифру', (value) =>
      passwordRules.hasNumber.test(value),
    )
    .required('Обязательное поле'),
});
