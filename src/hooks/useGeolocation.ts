import {useEffect, useState} from "react";

type GeoLocationPosition = {
    latitude: number;
    longitude: number;
};

type GeoLocationError = string;

const useGeoLocation = () => {
    const [location, setLocation] = useState<GeoLocationPosition | null>(null);
    const [error, setError] = useState<GeoLocationError | null>(null);

    const refresh = () => {
        setLocation(null);
        setError(null);
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by the browser.');
            return;
        }

        const handleSuccess = (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
        };

        const handleError = (error: GeolocationPositionError) => {
            setError(error.message);
        };

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

    return { location, error, refresh };
};

export default useGeoLocation;