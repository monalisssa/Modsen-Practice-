import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

export const InfoCardWrapper = styled.div`
  min-height: 60%;
  width: 100%;
  border-radius: 10px;
  border: 3px solid #c4c4c4;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
    
  @media (${device.laptop}) {  
      min-height: 80%;
  }
`;

export const InfoCardImageBox = styled.div`
  width: 320px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  overflow: hidden;
  border-radius: 15px;
  align-self: center;
  & img {
    width: 100%;
    height: auto;
  }

    @media (${device.laptop}) {
        width: 300px
    }
    
`;

export const InfoCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
export const InfoCardIcons = styled.ul`
  display: flex;
  gap: 5px;
  width: 25px;
`;

export const InfoCardDescription = styled.div`
  & h2 {
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
  }
  & p {
    font-size: 13px;
    line-height: 15px;
    color: #373737;
    text-align: justify;
    margin-top: 10px;
  }
  & b {
    font-size: 14px;
  }
`;

export const InfoCardButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
