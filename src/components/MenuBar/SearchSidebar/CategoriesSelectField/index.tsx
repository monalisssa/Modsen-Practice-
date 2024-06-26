import React, {useEffect} from 'react';
import {Styled, StyledSelectFieldWrapper, StyledSelectList, StyledSelectListItem} from "./styled";
import {arrayFilterCategories} from "../../../../constants/arrayFilterCategories";
import {useState} from "react";
import {fetchGeoObjects} from "../../../../store/actions/geoObjectsActions";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setFilters} from "../../../../store/reducers/geoObjectsSlice";

const CategoriesSelectField = () => {
    const [filterCategories, setFilterCategories] = useState([]);
    const dispatch = useAppDispatch()
    const geoObjects = useAppSelector((state) => state.geoObjectsReducer);

    useEffect(() => {
        if (geoObjects.filters && geoObjects.filters.length > 0) {
            setFilterCategories(
                arrayFilterCategories.map((el) => ({
                    ...el,
                    isSelected: geoObjects.filters.some((filter) =>
                        filter.categories.some((filterId) => el.categories.includes(filterId))
                    ),
                }))
            );
        } else {
            setFilterCategories(arrayFilterCategories);
        }
    }, [geoObjects.items]);

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
        <StyledSelectFieldWrapper>
            <h2>Искать:</h2>
            <Styled>
                <StyledSelectList>
                    {
                        filterCategories.map((el,index) =>
                            <StyledSelectListItem icon={el.url} selected={el.isSelected} onClick={() => handleClick(index)}>
                                {el.name}
                            </StyledSelectListItem>
                        )
                    }
                </StyledSelectList>
            </Styled>
        </StyledSelectFieldWrapper>

    );
};

export default CategoriesSelectField;