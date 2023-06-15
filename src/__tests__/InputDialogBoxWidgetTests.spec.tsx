/**
 * Unit Tests for the InputDialogBoxWidget
 */
import { cleanup, render, screen, within } from '@testing-library/react';
import { InputDialogBoxWidget } from '../widgets/InputDialogBoxWidget';
import '@testing-library/jest-dom';

describe('InputDialogBoxWidget Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('When a InputDialogBoxWidget is rendered it has the proper components', () => {
    render(new InputDialogBoxWidget().render());

    const component = screen.getByTestId('input-dialog-box-widget');
    expect(component).not.toBeNull();

    const dialog = within(component).getByTestId('dialog-box-component');
    expect(dialog).not.toBeNull();

    const input = within(dialog).getByTestId('input-component');
    expect(input).not.toBeNull();

    const button = within(dialog).getByTestId('button-component');
    expect(button).not.toBeNull();
  });

  it('When a InputDialogBoxWidgets OK button is clicked with inputted text it shows a confirmation with the message', () => {
    window.confirm = jest.fn();

    const dialogWidget = new InputDialogBoxWidget();
    render(dialogWidget.render());

    const inputBox = screen.getByTestId('dialog-box-input') as HTMLInputElement;
    inputBox.value = 'Hello';
    dialogWidget.onClick();

    expect(window.confirm).toHaveBeenCalledWith(
      'You entered: ' + inputBox.value
    );
  });

  it('When a InputDialogBoxWidgets OK button is clicked without inputted text nothing happens', () => {
    window.confirm = jest.fn();

    const dialogWidget = new InputDialogBoxWidget();
    render(dialogWidget.render());
    dialogWidget.onClick();

    expect(window.confirm).not.toBeCalled();
  });
});
