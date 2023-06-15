/**
 * Unit Tests for the ButtonComponent
 */
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ButtonComponent from '../components/ButtonComponent';
import React from 'react';
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
