export interface DialogBoxProps {
    open: boolean;
    title: string;
    message: React.ReactNode; // to accept JSX and strings for formatting 
    buttonText: string;
    onClose: () => void;
  }
