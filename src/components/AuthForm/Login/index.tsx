import React from 'react';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../index";
import {useAppDispatch} from "../../../hooks/redux";
import {setUser} from "../../../store/reducers/userSlice";


const Login = () => {
    const dispatch = useAppDispatch();
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            type="login"
            handleClick={handleLogin}
        />
    )
}

export default Login