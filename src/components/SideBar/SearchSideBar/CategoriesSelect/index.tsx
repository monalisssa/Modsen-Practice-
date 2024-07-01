import React, {useEffect} from 'react';
import {arrayCategories} from "../../../../constants/arrayCategories";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setFilters} from "../../../../store/reducers/geoObjectsSlice";
import {SelectFieldWrapper, SelectList, SelectListItem, SelectField} from "./styled";

const CategoriesSelect = () => {
    const [filterCategories, setFilterCategories] = useState([]);
    const dispatch = useAppDispatch()
    const geoObjects = useAppSelector((state) => state.geoObjectsReducer);

    useEffect(() => {

        setFilterCategories(Array.from(new Set([...geoObjects.filters, ...arrayCategories.filter(el => !geoObjects.filters.find(x => x.name===el.name))])));
    }, []);

    const handleClick = (index: number) => {
        setFilterCategories(
            filterCategories.map((el, i) =>
                i === index
                    ? { ...el, isSelected: !el.isSelected }
                    : el
            )
        );
    };

    useEffect(() => {
        dispatch(setFilters(filterCategories.filter(el => el.isSelected)))
    }, [filterCategories])

    return (
        <SelectFieldWrapper>
            <h2>Искать:</h2>
            <SelectField>
                <SelectList>
                    {
                        filterCategories.map((el,index) =>
                            <SelectListItem icon={el.url} selected={el.isSelected} onClick={() => handleClick(index)}>
                                {el.name}
                            </SelectListItem>
                        )
                    }
                </SelectList>
            </SelectField>
        </SelectFieldWrapper>

    );
};

export default CategoriesSelect;