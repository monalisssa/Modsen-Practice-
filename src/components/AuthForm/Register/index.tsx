
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useAppDispatch} from "../../../hooks/redux";
import Form from "../index";
import {setUser} from "../../../store/reducers/userSlice";


const SignUp = () => {
    const dispatch = useAppDispatch();
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
            })
            .catch(console.error)
    }

    return (
        <Form
            type="register"
            handleClick={handleRegister}
        />
    )
}

export default SignUp;