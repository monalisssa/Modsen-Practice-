import React from 'react';
import MenuBar from "../components/MenuBar/MenuBar";
import {YMaps} from "@pbe/react-yandex-maps";
import MapComponent from "../components/MapComponent/MapComponent";

const HomePage = () => {
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

export default HomePage;