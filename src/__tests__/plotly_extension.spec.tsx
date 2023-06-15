/**
 * Example of [Jest](https://jestjs.io/docs/getting-started) unit tests
 */

import React from 'react';
import {
  cleanup,
  render,
  screen,
  fireEvent,
  within
} from '@testing-library/react';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import DialogBoxComponent from '../components/DialogBoxComponent';
import { InputDialogBoxWidget } from '../widgets/InputDialogBoxWidget';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

describe('ButtonComponent Tests', () => {
  it('A ButtonComponent should render a button with the given label', () => {
    render(<ButtonComponent label={'Test'} handleClick={jest.fn()} />);

    const component = screen.getByRole('button');
    expect(component).not.toBeNull();
    expect(component.textContent).toEqual('Test');
  });

  it('When a ButtonComponent is clicked, its handleClick should get triggered', () => {
    const mockFn = jest.fn();
    render(<ButtonComponent label={'Test'} handleClick={mockFn} />);

    fireEvent.click(screen.getByText('Test'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('InputComponent Tests', () => {
  it('When a InputComponent is rendered an input field should exist', () => {
    render(<InputComponent />);

    expect(screen.getByRole('textbox')).not.toBeNull();
  });
});

describe('DialogBoxComponent Tests', () => {
  beforeEach(() => {
    render(<DialogBoxComponent children={<button>HELLO</button>} />);
  });

  it('When a DialogBoxComponent is rendered a dialog element should exist', () => {
    expect(screen.getByRole('dialog')).not.toBeNull();
  });

  it('When a DialogBoxComponent is rendered, its children should as well', () => {
    const component = screen.getByRole('dialog');
    expect(within(component).getByText('HELLO')).not.toBeNull();
  });
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
