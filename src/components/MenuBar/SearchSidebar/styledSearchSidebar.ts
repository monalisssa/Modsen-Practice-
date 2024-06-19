import styled, {keyframes} from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100px);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(-100%);
  }
`;

//Styled Components
export const DrawerWrapper = styled.div<{open: boolean}>`
    position: fixed;
    z-index: 10;
    width: 350px;
    height: 97%;
    padding: 30px;
    margin: 10px;
    background-color: #fff;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-name: ${(props) => props.open ? slideIn : slideOut};
   
    
`;


