import styled from "styled-components";


export const StyledButton = styled.div<{ icon: any, bg_color: string, width: string }>`
  z-index: 10;
  width: ${(props) => props.width};
  height: 45px;
  margin-top: 50px;
  background-color: ${(props) => props.bg_color};
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all .3s;
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: url(${(props) => props.icon});
    width: 30%;
    transform: translateY(-50%);
  }
    &:hover{
        transform: scale(1.05);
    }
`;