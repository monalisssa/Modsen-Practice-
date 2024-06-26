import styled, {keyframes} from "styled-components";

interface RegistrationInputProps {
    type: string;
    placeholder: string;
    required?: boolean;
    minLength?: number;
}

const slideIn = keyframes`
  from {
    transform: translateX(-50%) scale(0);
  }
  to {
    transform: translateX(-50%) scale(1);
  }
`;

export const ModalContainer =  styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgb(0,0,0,.7);
    
`;
export const RegistrationModal = styled.div`
    position: absolute;
    top: 20%;
    left:50%;
    transform: translateX(-50%);
    width: 25%;
    min-height: 300px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #000;
    z-index: 100;
    background-color: #fff;

    animation-duration: .6s;
    animation-name: ${(props) => slideIn};
    
    
    & a{
        color: #C75E5E;
        transition: all .3s;
    }

    & a:hover{
        color: #000;
    }

`;

export const RegistrationModalHeader = styled.div`
    background-color: #000;
    padding: 20px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px 10px 0 0;
    
`;
export const RegistrationModalContent = styled.form`
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px
`;


export const RegistrationInput = styled.input<RegistrationInputProps>`
    border-radius: 5px;
    width: 90%;
    color: #000;
    border: 3px solid #C4C4C4;
    padding: 5px 20px 5px 20px;

    &[type="password"] {
        min-length: ${(props) => props.minLength || 0};
    }
`;