/**
 * Unit Tests for the InputComponent
 */
import { cleanup, render, screen } from '@testing-library/react';
import InputComponent from '../components/InputComponent';
import React from 'react';
import '@testing-library/jest-dom';

describe('InputComponent Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('When a InputComponent is rendered an input field should exist', () => {
    render(<InputComponent />);

    expect(screen.getByRole('textbox')).not.toBeNull();
  });
});
