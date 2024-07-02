import React, {useEffect, useState} from 'react';
import {DrawerWrapper} from "../SearchSidebar/styled";
import SearchField from "../SearchField";
import {GeoObject} from "../../types/name";
import GeoObjectCard from "../GeoObjectCard";
import {FavoriteItemList} from "./styled";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setFavorites} from "../../store/reducers/userSlice";
import SelectedItemCard from "../SelectedItemCard";
import {getFavoriteItems} from "../../api/firebaseFavoritesApi";
import Loading from "../UI/Loading";
import {FavoritesSidebarProperties} from "./types";



const FavoritesSidebar: React.FC<FavoritesSidebarProperties> = ({open }) => {

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
                    dispatch(setFavorites(data))
                    setLoading(false)
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
                        <SelectedItemCard selectedItem={selectedObject} setSelectedItem={handleSetSelectedItem}/>
                    </>

                    :
                        <FavoriteItemList>
                            <h3>Избранное:</h3>
                            {
                                loading ? <Loading />
                                    :
                                    user.favorites.length > 0 ?
                                    user.favorites.map(item =>
                                        <GeoObjectCard item = {item} selectItem={handleSetSelectedItem}/>
                                    )
                                        : <p>Нет ни одного избранного места!</p>

                            }
                        </FavoriteItemList>

                }
            </DrawerWrapper>

        );
};

export default FavoritesSidebar;