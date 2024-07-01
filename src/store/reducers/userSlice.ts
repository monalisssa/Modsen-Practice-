import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFilterIcon} from "../../constants/arrayCategories";
import {GeoObject} from "../../../types";


interface UserState {
    email: string,
    token: string
    id: string,
    favorites: GeoObject[],
    isAuth: boolean
}

const initialState:UserState = {
    email: null,
    token: null,
    id: null,
    favorites: [],
    isAuth: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.isAuth = true
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.isAuth = false
        },
        setFavorites(state, action: PayloadAction<GeoObject[]>) {
           state.favorites = action.payload
        },
    },
});

export const {setUser, removeUser, setFavorites} = userSlice.actions;

export default userSlice.reducer;