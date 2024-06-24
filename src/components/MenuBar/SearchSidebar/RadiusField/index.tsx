import React, {useEffect, useState} from 'react';
import {StyledInput, StyledInputRadiusFieldWrapper, StyledInputRadiusText} from "./styled";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setRadius} from "../../../../store/reducers/geoObjectsSlice";
import 'react-dadata/dist/react-dadata.css';


const RadiusField = () => {

    const [radiusValue, setRadiusValue] = useState<number>(100)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(setRadius(radiusValue))
    }, [radiusValue])

    return (
        <>
            <StyledInputRadiusFieldWrapper>

                <h2>В радиусе:</h2>
                <div>
                    <StyledInput type="number" min={1} max={2000} onChange={(e) => setRadiusValue(Number(e.target.value))} value={radiusValue}/>
                    <StyledInputRadiusText>м</StyledInputRadiusText>
                </div>
            </StyledInputRadiusFieldWrapper>
        </>

    );
};

export default RadiusField;