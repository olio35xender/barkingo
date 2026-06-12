import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Barkingo Dashboard brand text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Barkingo/i);
  expect(headerElement).toBeInTheDocument();
});
