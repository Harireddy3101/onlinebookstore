export interface ButtonProps {
  className?: string;
  text?: {
    signUp?: React.ReactNode;
  };
  onClick?: (e: React.MouseEvent) => void;
} 