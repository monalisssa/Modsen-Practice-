import styled from 'styled-components';

export const SNotification = styled.div<{ bgColor: string }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.bgColor};
  min-width: 370px;
  height: 50px;
  z-index: 100;
  padding: 30px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;

  & img {
    width: 50px;
  }
`;
