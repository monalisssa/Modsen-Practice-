import React, {FC, useState} from 'react';
import {

    RegistrationModalContent,
    RegistrationInput,
    RegistrationModal,
    RegistrationModalHeader
} from "./styled";
import Button from "../UI/Button/Button";
import search_icon from "../../assets/images/search_icon.svg";

interface FormProps {
    type: string;
    handleClick: (email: string, pass: string) => void;
}
const Form: FC<FormProps> = ({type, handleClick})  => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handlePasswordChange = (password: string) =>
    {
        setPassword(password)
    }

    const handleEmailChange = (email: string) =>
    {
        setEmail(email)
    }
    return (
        <RegistrationModal>
            <RegistrationModalHeader>
                {type === 'login' ? "Авторизация" : "Регистрация"}
            </RegistrationModalHeader>
            <RegistrationModalContent>
                <RegistrationInput placeholder="Почта" type="email" required onChange={(e) => handleEmailChange(e.target.value)}/>
                <RegistrationInput type="password" placeholder="Пароль" required minLength={8} onChange={(e) => handlePasswordChange(e.target.value)}/>
                <h4>
                    {type === 'login' ? "Нет аккаунта? Регистрация!" : " Есть аккаунт? Авторизация!"}

                </h4>
                <Button width="90%" bg_color="#000" onClick={() => handleClick(email, password)} type="submit">
                    {type === 'login' ? "Войти" : "Зарегистрироваться"}
                </Button>
            </RegistrationModalContent>
        </RegistrationModal>
    );
};

export default Form;