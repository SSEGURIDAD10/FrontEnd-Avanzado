import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('test of app component', async () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  expect(screen.getByRole('heading')).toHaveTextContent('Vite + React');
});
