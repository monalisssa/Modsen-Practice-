import styled from "styled-components";

interface RegistrationInputProps {
    type: string;
    placeholder: string;
    required?: boolean;
    minLength?: number;
}

export const RegistrationModal = styled.div`
    margin: 150px auto;
    width: 25%;
    min-height: 300px;
    border-radius: 10px;
    border: 1px solid #ccc;
    box-shadow: 10px 10px 20px 10px #9ca3af;
    
`;

export const RegistrationModalHeader = styled.div`
    background-color: #000;
    padding: 30px;
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