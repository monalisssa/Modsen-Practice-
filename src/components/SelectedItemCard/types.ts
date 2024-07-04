import { GeoObject } from '../../types/name';

export interface SelectedItemCardProps {
  selectedItem: GeoObject;
  handleRemoveItem: () => void;
}
