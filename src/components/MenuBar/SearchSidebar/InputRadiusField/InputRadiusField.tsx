import React from 'react';
import {StyledInputRadiusField, StyledInputRadiusFieldWrapper, StyledInputRadiusText} from "./styledInputRadiusField";

// @ts-ignore
const InputRadiusField = ({handleRadiusChange}) => {
    return (
        <StyledInputRadiusFieldWrapper>
            <h2>В радиусе:</h2>

            <div>
                <StyledInputRadiusField onChange={(event) => handleRadiusChange(event.target.value)} type="number"/>
                <StyledInputRadiusText>км</StyledInputRadiusText>
            </div>

        </StyledInputRadiusFieldWrapper>
    );
};

export default InputRadiusField;