/**
 * Unit Tests for the DialogBoxComponent
 */
import { cleanup, render, screen, within } from '@testing-library/react';
import DialogBoxComponent from '../components/DialogBoxComponent';
import React from 'react';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
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
