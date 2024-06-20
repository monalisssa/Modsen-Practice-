import React, {useEffect} from 'react';
import {Styled, StyledSelectFieldWrapper, StyledSelectList, StyledSelectListItem} from "./styled";
import {arrayFilterCategories} from "../../../../constants/ArrayFilterCategories";
import {useState} from "react";
import {fetchGeoObjects} from "../../../../store/actions/GeoObjectsActions";
import {useAppDispatch} from "../../../../hooks/redux";
import {setFilters} from "../../../../store/reducers/GeoObjectsSlice";

const CategoriesSelectField = () => {
    const [filterCategories, setFilterCategories] = useState([]);
    const dispatch = useAppDispatch()

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        setFilterCategories(arrayFilterCategories);
    }, [arrayFilterCategories]);

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