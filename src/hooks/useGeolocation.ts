import { useEffect, useState } from 'react';

type GeoLocationPosition = {
  latitude: number;
  longitude: number;
};

type GeoLocationError = string;

const useGeoLocation = () => {
  const [location, setLocation] = useState<GeoLocationPosition | null>(null);
  const [location_error, setLocation_error] = useState<GeoLocationError | null>(null);

  const refresh = () => {
    setLocation(null);
    setLocation_error(null);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation_error('Geolocation is not supported by the browser.');
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = (error: GeolocationPositionError) => {
      setLocation_error(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, location_error, refresh };
};

export default useGeoLocation;
