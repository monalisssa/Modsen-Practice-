import React from 'react';
import "../assets/styles/main.css"
import "../assets/styles/fonts.css"
import HomePage from "../pages/HomePage";
import { Outlet } from 'react-router-dom';


export const App = () => {

    return (
        <>
            <Outlet />
            <HomePage />
        </>

    );
}