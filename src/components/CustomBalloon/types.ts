import { GeoObject } from '../../types/name';

export interface CustomBalloonProps {
  item: GeoObject;
  handleCloseBalloon: () => void;
  handleViewNotification: () => void;
  handleViewAuthNotification: () => void;
}
