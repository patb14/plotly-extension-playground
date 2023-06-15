import React from 'react';

interface IButtonProps {
  label: string;
  handleClick: () => void;
}

/**
 * React component for a button
 */
const ButtonComponent = ({ label, handleClick }: IButtonProps): JSX.Element => {
  return (
    <div>
      <button data-testid={'button-component'} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default ButtonComponent;
