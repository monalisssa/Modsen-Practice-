import styled from "styled-components";

export const SearchInput = styled.input<{icon: any}>`
    border-radius: 5px;
    width: 100%;
    color: #000;
    border: 3px solid #C4C4C4;
    padding: 5px 40px 5px 30px;
    opacity: 50%;
    position: relative;
  
    &:before {
        position: absolute;
        top: 50%;
        content: url(${(props) => props.icon});
        transform: translateY(-50%);
    }
`;