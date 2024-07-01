import React, {FC, useState} from 'react';
import {

    RegistrationModalContent,
    RegistrationInput,
    RegistrationModal,
    RegistrationModalHeader, ModalContainer
} from "./styled";

import {Link} from "react-router-dom";
import Button from "../UI/Button";

interface FormProps {
    type: string;
    handleClick: (email: string, pass: string) => void;
}
const Form: FC<FormProps> = ({type, handleClick})  => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <ModalContainer>
            <RegistrationModal>
                <RegistrationModalHeader>
                    {type === 'login' ? "Авторизация" : "Регистрация"}
                </RegistrationModalHeader>
                <RegistrationModalContent onSubmit={handleSubmit}>
                    <RegistrationInput placeholder="Почта" type="email" required onChange={handleEmailChange}/>
                    <RegistrationInput type="password" placeholder="Пароль" required minLength={8} onChange={handlePasswordChange}/>
                    <Button bgColor={"#C75E5E"} iconColor={"#000"} width={"90%"} onClick={() =>  handleClick(email, password)}>
                        {type === 'login' ? "Войти" : "Зарегистрироваться"}
                    </Button>
                        {type === 'login' ?
                            <h4>
                                Нет аккаунта?
                                <Link to={'/register'}> Регистрация!</Link>
                            </h4>
                            :
                            <h4>
                                Есть аккаунт?
                                <Link to={'/login'}> Авторизация!</Link>
                            </h4>
                        }
                </RegistrationModalContent>
            </RegistrationModal>
        </ModalContainer>

    );
};

export default Form;