import React, {FC, useState} from 'react';
import {

    RegistrationModalContent,
    RegistrationInput,
    RegistrationModal,
    RegistrationModalHeader, ModalContainer
} from "./styled";
import Button from "../UI/Button/Button";
import search_icon from "../../assets/images/search_icon.svg";
import {Link} from "react-router-dom";

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

    const handlePasswordChange = (password: string) =>
    {
        setPassword(password)
    }

    const handleEmailChange = (email: string) =>
    {
        setEmail(email)
    }
    return (
        <ModalContainer>
            <RegistrationModal>
                <RegistrationModalHeader>
                    {type === 'login' ? "Авторизация" : "Регистрация"}
                </RegistrationModalHeader>
                <RegistrationModalContent onSubmit={handleSubmit}>
                    <RegistrationInput placeholder="Почта" type="email" required onChange={(e) => handleEmailChange(e.target.value)}/>
                    <RegistrationInput type="password" placeholder="Пароль" required minLength={8} onChange={(e) => handlePasswordChange(e.target.value)}/>
                    <Button bg_color={"#C75E5E"} icon_color={"#000"} width={"90%"} onClick={() =>  handleClick(email, password)}>
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