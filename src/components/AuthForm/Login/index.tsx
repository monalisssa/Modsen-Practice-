import React from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../store/reducers/userSlice";
const SignUp = () => {
    const dispatch = useAppDispatch();
    const {push} = useHistory();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                push('/');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    )
}

export default Login;