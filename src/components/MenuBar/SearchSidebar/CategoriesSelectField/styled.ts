import styled from "styled-components";


export const StyledSelectFieldWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    & h2{
        font-weight: 600;
        font-size: 18px;
    }
`;

export const Styled = styled.div`
    border-radius: 10px;
    width: 100%;
    color: #000;
    border: 3px solid #C4C4C4;
    padding: 15px;
    height: 320px;

    
`;

export const StyledSelectList = styled.ul`
   display: flex;
   flex-direction: column;

    overflow-y: scroll;
    max-height: 300px;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #00000080;
        border-radius: 4px;
    }
`;


export const StyledSelectListItem = styled.li<{icon: any, selected: boolean}>`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 10px;
    transition: all .3s;
    border-radius: 10px;
    line-height: 10px;
    font-size: 14px;
    opacity: ${props => !props.selected ? ".5" : '1'};

    &::before {
        content: "";
        display: block;
        width: 25px; // или любой другой желаемый размер
        height: 25px; // или любой другой желаемый размер
        background-image: url(${({ icon }) => icon});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    
    &:hover{
        background-color: #f5f5f5;
    }
    
  
`;