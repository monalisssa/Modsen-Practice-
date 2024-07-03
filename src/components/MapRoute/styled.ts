import styled from 'styled-components';

export const RouteModal = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #fff;
  min-width: 370px;
  min-height: 100px;
  z-index: 10;
  padding: 30px;
  border-radius: 10px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 2px;
    background-color: #ccc;
  }
  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const RouteModalInfoBox = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;

  & div {
    display: flex;
    flex-direction: column;
    color: rgb(64, 95, 123, 0.5);
    font-size: 14px;
    & b {
      color: rgb(64, 95, 123);
      font-weight: bold;
      font-size: 18px;
    }
  }
`;
