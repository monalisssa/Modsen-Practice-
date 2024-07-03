import styled from 'styled-components';

export const SearchInput = styled.input<{ icon: string }>`
  border-radius: 8px;
  width: 100%;
  color: #000;
  border: 3px solid #c4c4c4;
  padding: 10px 60px;
  opacity: 50%;
  font-family: Mont, sans-serif;
  font-size: 15px;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  position: relative;
  & img {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    width: 20px;
    opacity: 50%;
    z-index: 20;
    cursor: pointer;
    transition: all 0.3s;
  }

  & img:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;
