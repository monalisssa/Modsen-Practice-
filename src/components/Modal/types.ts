export interface ModalProps {
  type: string;
  handleSubmitForm: (email: string, pass: string) => void;
}