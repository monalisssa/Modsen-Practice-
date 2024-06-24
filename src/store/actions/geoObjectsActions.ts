import {createAsyncThunk} from '@reduxjs/toolkit';
import {searchObject, searchObjects} from "../../utils/api/searchObjects";
import {AppDispatch} from "../index";
import {geoObjectsSlice, setCoordinates} from "../reducers/GeoObjectsSlice";



export const fetchGeoObjects = (coordinates: { lat: number; lng: number }, radius: number, filters: any) => async (dispatch: AppDispatch) => {
       try {
            dispatch(geoObjectsSlice.actions.geoObjectsFetching())
            const response = await searchObjects(coordinates, radius, filters);
            console.log(response)
            dispatch(geoObjectsSlice.actions.geoObjectsFetchingSuccess(response))
       } catch (e) {
           dispatch(geoObjectsSlice.actions.geoObjectsFetchingError(e.message))
       }
}


export const fetchOneGeoObject = (search_str: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(geoObjectsSlice.actions.geoObjectsFetching())
        const response = await searchObject(search_str);
        dispatch(geoObjectsSlice.actions.geoObjectsFetchingSuccess(response))
        dispatch(setCoordinates([response.point.lat, response.point.lon]))
    } catch (e) {
        dispatch(geoObjectsSlice.actions.geoObjectsFetchingError(e.message))
    }
}