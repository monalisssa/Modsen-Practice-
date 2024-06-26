import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFilterIcon} from "../../constants/arrayCategories";


interface GeoObjectsState {
    items: any;
    isLoading: boolean;
    error: string;
    searchObject: {
        name: string,
        point: number[]
    }
    radius: number,
    filters: Array<IFilterIcon>
}

const initialState: GeoObjectsState = {
    items: [],
    isLoading: false,
    error: '',
    searchObject: {
        name: '',
        point: [0,0]
    },
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
        geoObjectsFetching(state) {
            state.isLoading = true;
        },
        geoObjectsFetchingSuccess(state, action: PayloadAction<any>) {
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
    setFilters
} = geoObjectsSlice.actions;

export default geoObjectsSlice.reducer;
