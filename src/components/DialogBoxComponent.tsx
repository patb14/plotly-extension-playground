import React from 'react';

/**
 * React component for a DialogBox
 */
// TODO: CHILDREN TYPE
const DialogBoxComponent = ({ children }: any): JSX.Element => {
  return <dialog open>{children}</dialog>;
};

export default DialogBoxComponent;
