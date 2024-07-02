import React, {useState} from 'react';
import {YMaps} from "@pbe/react-yandex-maps";
import MapComponent from "../components/MapComponent";
import MenuBar from "../components/MenuBar";
import {GeoObject} from "../types/name";
import {API_KEY, SUGGEST_API_KEY} from "../constants/apiKeys";


const HomePage = () => {
    return (
       <>
           <MenuBar/>
           <YMaps query={{
               apikey: API_KEY,
               suggest_apikey: SUGGEST_API_KEY
           }}>
               <MapComponent/>
           </YMaps>



       </>
    );
};

export default HomePage;