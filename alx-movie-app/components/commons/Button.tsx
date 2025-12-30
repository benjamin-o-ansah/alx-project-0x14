import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="common-btn">
      {label}
    </button>
  );
};

export default Button;