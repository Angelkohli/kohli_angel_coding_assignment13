import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown Component', () => {
  test('renders dropdown and is visible', () => {
    render(<Dropdown options={mockOptions} />);
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Dropdown options={mockOptions} disabled={true} />);
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toHaveStyle('background-color: #f5f5f5');
  });

  test('displays placeholder option', () => {
    render(<Dropdown options={mockOptions} placeholder="Choose one" />);
    const placeholder = screen.getByText('Choose one');
    expect(placeholder).toBeInTheDocument();
  });

  test('renders all options', () => {
    render(<Dropdown options={mockOptions} />);
    mockOptions.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test('handles change event', () => {
    const handleChange = jest.fn();
    render(<Dropdown options={mockOptions} onChange={handleChange} />);

    const dropdown = screen.getByTestId('dropdown');
    fireEvent.change(dropdown, { target: { value: 'option1' } });

    expect(handleChange).toHaveBeenCalledWith('option1');
  });

  test('cursor is not-allowed when disabled', () => {
    render(<Dropdown options={mockOptions} disabled={true} />);
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toHaveStyle('cursor: not-allowed');
  });

  test('cursor is pointer when enabled', () => {
    render(<Dropdown options={mockOptions} disabled={false} />);
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toHaveStyle('cursor: pointer');
  });
});
