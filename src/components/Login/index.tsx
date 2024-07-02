import React from 'react';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../AuthForm";
import {useAppDispatch} from "../../hooks/redux";
import {setUser} from "../../store/reducers/userSlice";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/')
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            type="login"
            handleSubmitForm={handleLogin}
        />
    )
}

export default Login