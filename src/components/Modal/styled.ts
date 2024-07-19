import styled, { keyframes } from 'styled-components';
import { device } from '../../constants/breakpoints';

const slideIn = keyframes`
  from {
    transform: translateX(-50%) scale(0);
  }
  to {
    transform: translateX(-50%) scale(1);
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgb(0, 0, 0, 0.7);
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 25%;
  min-height: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #000;
  z-index: 100;
  background-color: #fff;

  animation-duration: 0.6s;
  animation-name: ${() => slideIn};

  & h4 {
    text-align: center;
    margin-bottom: 20px;
  }
  & a {
    color: #c75e5e;
    transition: all 0.3s;
  }

  & a:hover {
    color: #000;
  }

  @media (${device.laptop}) {
    width: 80%;
  }
`;

export const ModalHeader = styled.div`
  background-color: #000;
  padding: 20px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border-radius: 10px 10px 0 0;
`;
