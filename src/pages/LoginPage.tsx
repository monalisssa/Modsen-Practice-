import React from 'react';
import Form from "../components/AuthForm";
import Login from "../components/AuthForm/Login";
import {Outlet} from "react-router-dom";
import MenuBar from "../components/MenuBar";
import {YMaps} from "@pbe/react-yandex-maps";
import MapComponent from "../components/MapComponent";

const LoginPage = () => {
    return (
           <Login />
    );
};

export default LoginPage;