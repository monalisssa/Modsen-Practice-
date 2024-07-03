import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFilterIcon} from "../../constants/arrayCategories";
import {GeoObject} from "../../types/name";


interface GeoObjectsState {
    items: GeoObject[];
    isLoading: boolean;
    error: string;
    searchObject: {
        name: string,
        point: number[]
    }
    radius: number;
    filters: Array<IFilterIcon>;
    routeToObject: GeoObject;
}

const initialState: GeoObjectsState = {
    items: [],
    isLoading: false,
    error: '',
    searchObject: {
        name: '',
        point: [0,0]
    },
    routeToObject: null,
    radius: 100,
    filters: []
};

export const geoObjectsSlice = createSlice({
    name: 'geo_objects',
    initialState,
    reducers: {
        setSearchObject(state, action: PayloadAction<{ name: string; point: number[]; }>) {
            state.searchObject = action.payload;
        },
        setRadius(state, action: PayloadAction<number>) {
            state.radius = action.payload;
        },
        setFilters(state, action: PayloadAction<Array<IFilterIcon>>) {
            state.filters = action.payload;
        },
        setRouteToObject(state, action: PayloadAction<GeoObject>) {
            state.routeToObject = action.payload;
        },
        geoObjectsFetching(state) {
            state.isLoading = true;
        },
        geoObjectsFetchingSuccess(state, action: PayloadAction<GeoObject[]>) {
            state.isLoading = false;
            state.error = '';
            state.items = action.payload;
        },
        geoObjectsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export const {
    setSearchObject,
    setRadius,
    setFilters,
    setRouteToObject
} = geoObjectsSlice.actions;

export default geoObjectsSlice.reducer;
