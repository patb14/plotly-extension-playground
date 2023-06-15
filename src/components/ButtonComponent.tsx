import React from 'react';

/**
 * React component for a button
 */
// TODO: TYPE
const ButtonComponent = ({ label, handleClick }: any): JSX.Element => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
};

export default ButtonComponent;
