import React from 'react';
import { DrawerWrapper } from './styled';
import search_icon from '../../assets/images/search_icon.svg';
import SearchField from '../SearchField';
import CategoriesSelect from '../CategoriesSelect';
import RadiusField from '../RadiusField';
import { fetchGeoObjects } from '../../store/actions/geoObjectsActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Button from '../UI/Button';
import { SearchSidebarProperties } from './types';

const SearchSidebar: React.FC<SearchSidebarProperties> = ({ open }) => {
  const dispatch = useAppDispatch();
  const geoObjects = useAppSelector((state) => state.geoObjectsReducer);

  const handleLoadGeoObjects = () => {
    dispatch(
      fetchGeoObjects(
        { lat: geoObjects.searchObject.point[0], lng: geoObjects.searchObject.point[1] },
        geoObjects.radius,
        geoObjects.filters,
      ),
    );
  };

  return (
    <DrawerWrapper open={open}>
      <SearchField />
      <CategoriesSelect />
      <RadiusField />
      <Button
        icon={search_icon}
        onClick={handleLoadGeoObjects}
        bgColor={'#5E7BC7'}
        width={'100%'}
        iconColor={'#777'}
      />
    </DrawerWrapper>
  );
};
export default SearchSidebar;
