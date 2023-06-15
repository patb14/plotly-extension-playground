import { ReactWidget } from '@jupyterlab/apputils';
import React from 'react';
import DialogBoxComponent from '../components/DialogBoxComponent';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

/**
 * A ReactWidget that generates a dialog box that allows the user to enter text.
 * Once the button is clicked, a confirmation window appears displaying their
 * inputted text.
 */
export class InputDialogBoxWidget extends ReactWidget {
  constructor() {
    super();
    this.addClass('jp-ReactWidget');
  }

  onClick() {
    try {
      const inputField = document.getElementById(
        'dialog-box-input'
      ) as HTMLInputElement;

      if (!inputField.value) {
        return;
      }
      window.confirm('You entered: ' + inputField.value);
    } catch (e: any) {
      console.error('Failed to confirm with error: ' + e.message);
    }
  }

  render(): JSX.Element {
    return (
      <div data-testid="input-dialog-box-widget">
        <DialogBoxComponent
          children={
            <div>
              <InputComponent />
              <div className={'jp-Dialog-footer'}>
                <ButtonComponent label={'OK'} handleClick={this.onClick} />
              </div>
            </div>
          }
        />
      </div>
    );
  }
}
