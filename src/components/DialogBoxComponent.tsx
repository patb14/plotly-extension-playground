import React, { ReactNode } from 'react';

interface IDialogBoxProps {
  children: ReactNode;
}

/**
 * React component for a DialogBox
 */
const DialogBoxComponent = ({ children }: IDialogBoxProps): JSX.Element => {
  return (
    <dialog open data-testid={'dialog-box-component'}>
      {children}
    </dialog>
  );
};

export default DialogBoxComponent;
