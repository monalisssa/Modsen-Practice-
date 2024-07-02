import {GeoObject} from "../../types/name";

export interface SelectedItemCardProps {
    selectedItem: GeoObject;
    setSelectedItem: (item: GeoObject) => void;
}