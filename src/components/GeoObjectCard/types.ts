import {GeoObject} from "../../types/name";

export interface GeoObjectCardProps {
    item: GeoObject;
    selectItem?: (item: GeoObject) => void;
    mapBalloon?: boolean;
}