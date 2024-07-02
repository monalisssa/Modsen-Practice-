import React, {useEffect, useState} from 'react';
import {DrawerWrapper} from "../SearchSideBar/styled";
import SearchField from "../SearchSideBar/SearchBar";
import {GeoObject} from "../../../../types";
import ItemCard from "./ItemCard";
import {FavoriteItemList} from "./styled";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getDatabase, ref,  onValue} from "firebase/database";
import {setFavorites} from "../../../store/reducers/userSlice";
import SelectedItemCard from "./SelectedItemCard";
import {addToFavorites, getFavoriteItems} from "../../../api/firebaseFavoritesApi";
import Loading from "../../UI/Loading";


interface FavoritesSidebarProperties {
    open: boolean;
}
const FavoritesSidebar = ({ open, }: FavoritesSidebarProperties ) => {

    const [selectedObject, setSelectedObject] = useState<GeoObject>(null)
    const user = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if(user.isAuth) {
            getFavoriteItems(user.id)
                .then( data =>
                {
                    setLoading(false)
                    dispatch(setFavorites(data))
                })
                .catch(e => console.log(e.message()))
        }
        else setTimeout(() => setLoading(false), 1000)
    }, [user.isAuth]);

    const handleSetSelectedItem = (item: GeoObject | null) => {
        setSelectedObject(item)
    };

        return (
            <DrawerWrapper open={open}>
                <SearchField/>
                {
                    selectedObject ?
                    <>
                        <h3 onClick={() => handleSetSelectedItem(null)}>&#9668; Избранные</h3>
                        <SelectedItemCard selectedObject={selectedObject} setSelectedItem={handleSetSelectedItem}/>
                    </>

                    :
                        <FavoriteItemList>
                            <h3>Избранное:</h3>

                            {
                                loading ? <Loading />
                                    :
                                    user.favorites.length > 0 ?
                                    user.favorites.map(item =>
                                        <ItemCard item = {item} selectItem={handleSetSelectedItem}/>
                                    )
                                        : <p>Нет ни одного избранного места!</p>

                            }
                        </FavoriteItemList>

                }
            </DrawerWrapper>

        );
};

export default FavoritesSidebar;