import {configureStore} from '@reduxjs/toolkit';
import geoObjectsSlice from "./reducers/geoObjectsSlice";
import {combineReducers} from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";

const rootReducer = combineReducers({
    geoObjectsReducer: geoObjectsSlice,
    userReducer: userSlice
});


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];