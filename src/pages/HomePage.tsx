import React, {useState} from 'react';
import {YMaps} from "@pbe/react-yandex-maps";
import MapComponent from "../components/MapComponent";
import MenuBar from "../components/MenuBar";
import {GeoObject} from "../../types";
import {API_KEY, SUGGEST_API_KEY} from "../constants/apiKeys";


const HomePage = () => {

    const [selectedObject, setSelectedObject] = useState<GeoObject>(null)

    const handleSetSelectedObject = (item: GeoObject) =>
    {
        setSelectedObject(item)
    }

    return (
       <>
           <MenuBar selectedObject = {selectedObject} setSelectedObject={setSelectedObject}/>
           <YMaps query={{
               apikey: API_KEY,
               suggest_apikey: SUGGEST_API_KEY
           }}>
               <MapComponent selectObject={handleSetSelectedObject}/>
           </YMaps>



       </>
    );
};

export default HomePage;