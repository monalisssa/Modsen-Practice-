import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFilterIcon} from "../../constants/ArrayFilterCategories";


interface GeoObjectsState {
    geo_objects: any;
    isLoading: boolean;
    error: string;
    coordinates: Array<number>
    radius: number,
    filters: Array<IFilterIcon>
}

const initialState: GeoObjectsState = {
    geo_objects: [],
    isLoading: false,
    error: '',
    coordinates: [0,0],
    radius: 100,
    filters: []
};

export const geoObjectsSlice = createSlice({
    name: 'geo_objects',
    initialState,
    reducers: {
        setCoordinates(state, action: PayloadAction<Array<number>>) {
            state.coordinates = action.payload;
        },
        setRadius(state, action: PayloadAction<number>) {
            state.radius = action.payload;
        },
        setFilters(state, action: PayloadAction<Array<IFilterIcon>>) {
            state.filters = action.payload;
        },
        geoObjectsFetching(state) {
            state.isLoading = true;
        },
        geoObjectsFetchingSuccess(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = '';
            state.geo_objects = action.payload;
        },
        geoObjectsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export const {
    setCoordinates,
    setRadius,
    setFilters
} = geoObjectsSlice.actions;

export default geoObjectsSlice.reducer;
