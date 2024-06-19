import styled from "styled-components";

export const StyledInputRadiusFieldWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & h2{
        font-weight: 600;
        font-size: 18px;
    }
    
`;


export const StyledInputRadiusField = styled.input`
    border-radius: 10px;
    color: #000;
    border: 3px solid #C4C4C4;
    padding: 5px 30px 5px 10px; // reduced the right padding to make space for the "км" text
    opacity: 50%;
    width: 30%;
`;

export const StyledInputRadiusText = styled.span`
  margin-left: 15px;
  color: #000;
  font-weight: bold;
  font-size: 14px;
`;
