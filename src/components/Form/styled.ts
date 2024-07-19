import styled from 'styled-components';

export const SForm = styled.form`
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;

  & p {
    color: #fc8181;
    font-size: 0.75rem;
    text-align: left;
    margin-top: 0.25rem;
  }
`;

export const InputField = styled.input<{ isError: boolean }>`
  border-radius: 5px;
  width: 100%;
  color: #000;
  border-style: solid;
  border-width: 3px;
  padding: 5px 20px 5px 20px;
  border-color: ${(props) => (props.isError ? '#fc8181' : '#C4C4C4')};
`;
