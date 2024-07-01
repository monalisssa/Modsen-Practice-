
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useAppDispatch} from "../../../hooks/redux";
import Form from "../index";
import {setUser} from "../../../store/reducers/userSlice";
import {useNavigate} from "react-router-dom";


const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
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
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <Form
            type="register"
            handleSubmitForm={handleRegister}
        />
    )
}

export default Register;