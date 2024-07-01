import React, {useEffect, useState} from 'react';
import {DrawerWrapper} from "../SearchSideBar/styled";
import SearchField from "../SearchSideBar/SearchBar";
import {GeoObject} from "../../../../types";
import FavoriteItem from "./FavoriteItem";
import {FavoriteItemList} from "./styled";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getDatabase, ref,  onValue} from "firebase/database";
import {setFavorites} from "../../../store/reducers/userSlice";
import InfoCard from "./InfoCard";


interface FavoritesSidebarProperties {
    open: boolean;
}
const FavoritesSidebar = ({ open, }: FavoritesSidebarProperties ) => {

    const [selectedObject, setSelectedObject] = useState<GeoObject>(null)
    const user = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(user.isAuth) {
            getFavoritesFromDatabase()
        }
    }, [user.isAuth]);

    const handleReturnSearch = () => {
        setSelectedObject(null)
    };

    const getFavoritesFromDatabase = () => {
        const database = getDatabase();
        const favoritesRef = ref(database, 'favorites/' + user.id);

        onValue(favoritesRef, (snapshot: { val: () => any; }) => {
            const favoritesData = snapshot.val();
            if (favoritesData && favoritesData.items) {
                const favoriteItems = favoritesData.items;
                dispatch(setFavorites(favoriteItems));
            }
        }, (error: any) => {
            console.error('Ошибка при получении данных из базы данных:', error);
        });
    };


        return (
            <DrawerWrapper open={open}>
                <SearchField/>
                {
                    selectedObject ?
                    <>
                        <h3 onClick={handleReturnSearch}>&#9668; Избранные</h3>
                        <InfoCard selectedObject={selectedObject}/>
                    </>

                    :
                        <FavoriteItemList>
                            <h3>Избранное:</h3>
                            {
                                user.favorites.length > 0 &&
                                user.favorites.map(item =>
                                    <FavoriteItem item = {item} onClick={() => setSelectedObject(item)}/>
                                )

                            }
                        </FavoriteItemList>

                }
            </DrawerWrapper>

        );
};

export default FavoritesSidebar;