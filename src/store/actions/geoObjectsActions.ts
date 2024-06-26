import {createAsyncThunk} from '@reduxjs/toolkit';
import {searchObjects} from "../../utils/api/searchObjects";
import {AppDispatch} from "../index";
import {geoObjectsSlice, setSearchObject} from "../reducers/geoObjectsSlice";



export const fetchGeoObjects = (coordinates: { lat: number; lng: number }, radius: number, filters: any) => async (dispatch: AppDispatch) => {
       try {
            dispatch(geoObjectsSlice.actions.geoObjectsFetching())
            const response = await searchObjects(coordinates, radius, filters);
            dispatch(geoObjectsSlice.actions.geoObjectsFetchingSuccess(response))
       } catch (e) {
           dispatch(geoObjectsSlice.actions.geoObjectsFetchingError(e.message))
       }
}

