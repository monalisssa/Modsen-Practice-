import styled, { keyframes } from 'styled-components';
import { device } from '../../constants/breakpoints';

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

const slideInMobile = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideOutMobile = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

//Styled Components
export const DrawerWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 10;
  width: 400px;
  height: 97%;
  padding: 25px;
  margin: 10px;

  background-color: #fff;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-name: ${(props) => (props.open ? slideIn : slideOut)};
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h3 {
    font-weight: bold;
    cursor: pointer;
  }

  @media (${device.laptop}) {
    animation-name: ${(props) => (props.open ? slideInMobile : slideOutMobile)};
    bottom: 0;
    height: 100%;
    transform: translateX(-50%);
    resize: vertical;
    overflow: auto;
    width: 100%;
    margin: 0;
  }
`;
