import styled from 'styled-components';

export const FavoriteItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  max-height: 800px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
