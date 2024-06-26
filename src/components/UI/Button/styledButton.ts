import styled, {css} from "styled-components";


export const StyledButton = styled.button<{ bg_color: string, width: string}>`
  z-index: 10;
  min-width: ${(props) => props.width};
  height: 45px;
  background-color: ${(props) => props.bg_color};
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
    &:hover{
        transform: scale(1.05);
       
    }
`;



export const IconWrapper = styled.div<{ color: string }>`
    svg {
        fill: ${props => props.color};
    }
    
    
`;





