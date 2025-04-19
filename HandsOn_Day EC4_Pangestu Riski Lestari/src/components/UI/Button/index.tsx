import React from 'react';
import { ButtonProps } from './Button.interface';

const Button = (props: ButtonProps) => {
  const { children, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
