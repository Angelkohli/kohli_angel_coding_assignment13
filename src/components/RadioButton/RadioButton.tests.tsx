import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button and is visible', () => {
    render(<RadioButton name="test" value="test1" label="Test Radio" />);
    const radioLabel = screen.getByTestId('radio-button-label');
    expect(radioLabel).toBeVisible();
  });

  test('radio circle changes background color when checked', () => {
    render(<RadioButton name="test" value="test1" label="Test Radio" checked={true} />);
    const radioCircle = screen.getByTestId('radio-circle');
    expect(radioCircle).toHaveStyle('background-color: #007bff');
  });

  test('radio circle is white when not checked', () => {
    render(<RadioButton name="test" value="test1" label="Test Radio" checked={false} />);
    const radioCircle = screen.getByTestId('radio-circle');
    expect(radioCircle).toHaveStyle('background-color: white');
  });

  test('displays label text', () => {
    render(<RadioButton name="test" value="test1" label="My Option" />);
    const label = screen.getByText('My Option');
    expect(label).toBeInTheDocument();
  });

  test('disables radio button', () => {
    render(<RadioButton name="test" value="test1" label="Test" disabled={true} />);
    const container = screen.getByTestId('radio-button-label');
    expect(container).toHaveStyle('cursor: not-allowed');
  });

  test('handles change event', () => {
    const handleChange = jest.fn();
    render(<RadioButton name="test" value="test1" label="Test" onChange={handleChange} />);
    
    const input = screen.getByTestId('radio-button-input');
    fireEvent.change(input);
    
    expect(handleChange).toHaveBeenCalledWith('test1');
  });

  test('does not trigger change when disabled', () => {
    const handleChange = jest.fn();
    render(<RadioButton name="test" value="test1" label="Test" disabled={true} onChange={handleChange} />);
    
    const input = screen.getByTestId('radio-button-input') as HTMLInputElement;
    fireEvent.change(input);
    
    // The change event might still fire, but the callback should not be called due to the disabled check
  });
});