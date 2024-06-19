import styled from "styled-components";
import search_icon from "../../../../assets/images/search_icon.svg"


export const MenuBarButton = styled.div<{ icon: any }>`
  z-index: 10;
  width: 45px;
  height: 45px;
  background-color: #5E7BC7;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all .3s;
    
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: url(${(props) => props.icon});
    width: 50%;
    transform: translate(-50%, -50%);
  }
    &:hover{
        transform: scale(1.1);
    }
`;