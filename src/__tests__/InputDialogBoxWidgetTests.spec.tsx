/**
 * Unit Tests for the InputDialogBoxWidget
 */
import { cleanup, render, screen, within } from '@testing-library/react';
import { InputDialogBoxWidget } from '../widgets/InputDialogBoxWidget';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

describe('InputDialogBoxWidget Tests', () => {
  beforeEach(() => {
    render(new InputDialogBoxWidget().render());
  });

  it('When a InputDialogBoxWidget is rendered it has the proper components', () => {
    const component = screen.getByTestId('input-dialog-box-widget');
    expect(component).not.toBeNull();

    const dialog = within(component).getByTestId('dialog-box-component');
    expect(dialog).not.toBeNull();

    const input = within(dialog).getByTestId('input-component');
    expect(input).not.toBeNull();

    const button = within(dialog).getByTestId('button-component');
    expect(button).not.toBeNull();
  });
});
