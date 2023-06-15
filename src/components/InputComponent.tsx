import React from 'react';

/**
 * React component for an input field
 */
const InputComponent = (): JSX.Element => {
  return (
    <div data-testid={'input-component'}>
      <div className={'jp-Dialog-body'}>
        <input
          type={'text'}
          id={'dialog-box-input'}
          data-testid={'dialog-box-input'}
        />
      </div>
    </div>
  );
};

export default InputComponent;
