import React, {useEffect, useRef} from 'react';
import {SearchControl} from "@pbe/react-yandex-maps";
import {setSearchObject} from "../../../store/reducers/geoObjectsSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

const SearchBox = () => {


    const searchRef = useRef(null);
    const geoObjects = useAppSelector(state => state.geoObjectsReducer)
    const dispatch = useAppDispatch()

    const handleResultHide = () =>
    {
        searchRef.current.clear();
    }

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.search(geoObjects.searchObject.name).then(function () {
                const geoObjectsArray = searchRef.current.getResultsArray();
                if (geoObjectsArray.length) {
                    dispatch(setSearchObject({name: geoObjects.searchObject.name, point: geoObjectsArray[0].geometry._coordinates}))

                }
            });
        }

    }, [geoObjects.searchObject.name]);
    return (
        <SearchControl
            instanceRef={(ref) => {
                searchRef.current = ref;
            }}
            options={{
                provider: 'yandex#search',
                noSelect: true,
                visible: false
            }}
            onResultShow={handleResultHide}
        />
    );
};

export default SearchBox;