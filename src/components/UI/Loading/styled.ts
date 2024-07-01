import styled, {keyframes} from "styled-components";

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledLoading = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center; 
  margin: 0 auto;
  border: 5px solid #ccc;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;