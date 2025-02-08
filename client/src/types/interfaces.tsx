export interface DialogBoxProps {
    open: boolean;
    title: string;
    message: string;
    buttonText: string;
    onClose: () => void;
  }
