import React, {useEffect, useState} from 'react';
import "../assets/styles/main.css"
import "../assets/styles/fonts.css"
import MapComponent from "./MapComponent/MapComponent";
import {YMaps} from "@pbe/react-yandex-maps";
import MenuBar from "./MenuBar/MenuBar";
import {searchObjects} from "../utils/api/searchObjects";
import useGeoLocation from "../hooks/useGeolocation";
export const App = () => {

    const [searchStr, setSearchStr] = useState('');
    const [radius, setRadius] = useState(0);
    const { location: userLocation, error, refresh } = useGeoLocation();
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        const fetchObjects = async () => {
            if (userLocation) {
                try {
                    const response = await searchObjects(searchStr, radius, 53.9, 27.5667);
                    setObjects(response);
                    console.log(response);
                } catch (error) {
                    console.error('Error fetching objects:', error);
                }
            }
        };

        fetchObjects();
    }, [userLocation, searchStr, radius]);

    const handleSetSearchStr = (str: string) =>
    {
        setSearchStr(str)
        console.log(searchStr)
    }

    const handleRadiusChange = (radius: number) =>
    {
        setRadius(radius)
        console.log(radius)
    }

    if (!userLocation) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <MenuBar handleSearchObjects={handleSetSearchStr} handleRadiusChange={handleRadiusChange}/>
            <YMaps>
                <MapComponent objects={objects}/>
            </YMaps>
        </>
    );
};