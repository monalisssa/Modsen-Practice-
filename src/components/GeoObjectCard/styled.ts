import styled from 'styled-components';

export const ItemCardWrapper = styled.div<{ mapBalloon: boolean }>`
  min-height: ${(props) => (!props.mapBalloon ? '200px' : '100px')};
  width: 100%;
  border-radius: 10px;
  padding: 12px;
  cursor: ${(props) => (!props.mapBalloon ? 'pointer' : 'inherit')};
  transition: all 0.3s;
  border: ${(props) => (!props.mapBalloon ? '3px solid #C4C4C4' : 'none')};

  &:hover {
    border: ${(props) => (!props.mapBalloon ? '3px solid #C75E5E' : 'none')};
  }
`;

export const ItemCardHeader = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  & h2 {
    width: 180px;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const ItemImageBox = styled.div`
  width: 110px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  overflow: hidden;
  border-radius: 15px;
  align-self: center;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ItemCardContent = styled.div`
  margin-top: 10px;
  font-size: 13px;
  & b {
    font-size: 14px;
  }
`;

export const ItemCardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
