import styled, { keyframes } from 'styled-components';

export const ProgressContainer = styled.div`
  width: 100%;
  height: 7px;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  background-color: ${(props) => (props.progress >= 100 ? '#4CAF50' : '#C75E5E')};
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
  width: 0;

  animation: ${({ progress }) => keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: ${progress}%;
    }
  `}
    1s ease-in-out;

  animation-fill-mode: forwards;
`;
