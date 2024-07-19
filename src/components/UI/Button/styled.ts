import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';

export const Styled = styled.button<{ bgColor: string; width: string }>`
  z-index: 10;
  min-width: ${(props) => props.width};
  min-height: 45px;
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &:hover {
    transform: scale(1.05);
  }

  &[type='button'] {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;

    img {
      width: 15px;
    }

    @media (${device.laptop}) {
      font-size: 11px;
      padding: 5px;
      gap: 2px;

      img {
        width: 10px;
      }
    }
  }

  &[type='reset'] {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;

    img {
      width: 15px;
    }
    border: 3px solid #c4c4c4;
    color: #c4c4c4;
  }
`;

export const IconWrapper = styled.div<{ color: string }>`
  svg {
    fill: ${(props) => props.color};
  }
`;
