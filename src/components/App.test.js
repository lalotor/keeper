import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main header', () => {
  render(<App />);
  const mainHeader = screen.getByText(/Keeper/i);
  expect(mainHeader).toBeInTheDocument();
});
