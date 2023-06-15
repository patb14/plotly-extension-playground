import React from 'react';

/**
 * React component for an input field
 */
const InputComponent = (): JSX.Element => {
  return (
    <div>
      <div className={'jp-Dialog-body'}>
        <input type={'text'} id={'dialog-box-input'} required />
      </div>
    </div>
  );
};

export default InputComponent;
