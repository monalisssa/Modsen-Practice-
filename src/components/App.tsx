import React, {useEffect, useState} from 'react';
import "../assets/styles/main.css"
import "../assets/styles/fonts.css"
import MapComponent from "./MapComponent/MapComponent";
import {YMaps} from "@pbe/react-yandex-maps";
import MenuBar from "./MenuBar/MenuBar";

export const App = () => {
    return (
        <>
            <MenuBar />
            <YMaps query={{
                apikey: "6e33a64e-be02-4ac0-a8dd-a2e57798b0ab",
                suggest_apikey: "aa195e7e-687e-4a99-9ab9-ff92d8c7186f"
            }}>
                <MapComponent/>
            </YMaps>
        </>
    );
};