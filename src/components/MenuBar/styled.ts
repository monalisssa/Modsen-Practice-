import styled from 'styled-components';

export const MenuBarContainer = styled.div`
  position: fixed;
  margin: 10px;
  border-radius: 5px;
  z-index: 10;
  width: 90px;
  height: 97%;
  color: #000;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  & a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuBarButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
