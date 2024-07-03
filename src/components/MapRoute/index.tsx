import React, { useEffect, useState } from 'react';
import { MapRouteProps } from './types';
import { useAppSelector } from '../../hooks/redux';
import { CloseButton, RouteModal, RouteModalInfoBox } from './styled';
import ProgressIndicator from '../UI/ProgressIndicator';
import { calculateLoadingProgress } from '../../helpers/calculateLoadingProgress';

const MapRoute: React.FC<MapRouteProps> = ({ map, ymaps }) => {
  const [showRoute, setShowRoute] = useState(false);
  const geoObjects = useAppSelector((state) => state.geoObjectsReducer);
  const [multiRoute, setMultiRoute] = useState(null);
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [timeProgress, setTimeProgress] = useState(0);

  const addRoute = (ymaps: any) => {
    const pointA = geoObjects.searchObject.point;
    const pointB = [geoObjects.routeToObject.point.lat, geoObjects.routeToObject.point.lon];
    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: 'pedestrian',
        },
      },
      {
        boundsAutoApply: true,
      },
    );

    map.current.geoObjects.add(multiRoute);
    setMultiRoute(multiRoute);

    multiRoute.model.events.add('requestsuccess', function () {
      const activeRoute = multiRoute.getActiveRoute();
      if (activeRoute) {
        setDistance(activeRoute.properties.get('distance').text);
        setDuration(activeRoute.properties.get('duration').text);
        setTimeProgress(calculateLoadingProgress(activeRoute.properties.get('duration').text));
      }
    });
  };

  useEffect(() => {
    if (ymaps) {
      addRoute(ymaps);
      setShowRoute(true);
    }
  }, [ymaps, geoObjects.routeToObject]);

  const handleButtonClick = () => {
    map.current.geoObjects.remove(multiRoute);
    setShowRoute(false);
  };

  return (
    <>
      {showRoute && (
        <RouteModal>
          <CloseButton onClick={handleButtonClick} />
          <ProgressIndicator progress={timeProgress} />
          <RouteModalInfoBox>
            <div>
              <b>{distance}</b>
              дистанция
            </div>
            <div>
              <b>{duration}</b>
              примерное время
            </div>
          </RouteModalInfoBox>
        </RouteModal>
      )}
    </>
  );
};

export default MapRoute;
