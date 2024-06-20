import {configureStore} from '@reduxjs/toolkit';
import geoObjectsSlice from "./reducers/GeoObjectsSlice";
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    geoObjectsReducer: geoObjectsSlice
});


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];