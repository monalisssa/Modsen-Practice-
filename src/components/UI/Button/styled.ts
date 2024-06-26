import styled, {css} from "styled-components";


export const Styled = styled.button<{ bgColor: string, width: string}>`
  z-index: 10;
  min-width: ${(props) => props.width};
  height: 45px;
  background-color: ${(props) => props.bgColor};
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





