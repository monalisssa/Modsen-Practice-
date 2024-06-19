import React from 'react';
import {StyledSelectField, StyledSelectFieldWrapper, StyledSelectList, StyledSelectListItem} from "./styledSelectField";
import history from "../../../../assets/images/categoriesIcons/history.svg"
import {arrayFilterIcons} from "../../../../constants/ArrayFilterIcons";
const CategoriesSelectField = () => {
    return (
        <StyledSelectFieldWrapper>
            <h2>Искать:</h2>
            <StyledSelectField>
                <StyledSelectList>
                    {
                        arrayFilterIcons.map(el =>
                            <StyledSelectListItem icon={el.url}>
                                {el.name}
                            </StyledSelectListItem>
                        )
                    }
                </StyledSelectList>
            </StyledSelectField>
        </StyledSelectFieldWrapper>

    );
};

export default CategoriesSelectField;