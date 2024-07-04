import styled from 'styled-components';

export const SelectFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h2 {
    font-weight: 600;
    font-size: 17px;
  }
`;

export const SelectField = styled.div`
  border-radius: 10px;
  width: 100%;
  color: #000;
  border: 3px solid #c4c4c4;
  padding: 15px;
  height: 360px;
`;

export const SelectList = styled.ul`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  max-height: 330px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00000080;
    border-radius: 4px;
  }
`;

export const SelectListItem = styled.li<{ icon: any; selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 10px;
  transition: all 0.3s;
  border-radius: 10px;
  line-height: 10px;
  font-size: 14px;
  opacity: ${(props) => (!props.selected ? '.5' : '1')};

  &::before {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    background-image: url(${({ icon }) => icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;
