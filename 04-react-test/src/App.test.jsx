import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Test of app component', () => {
  it('Se muestra el titulo', () => {
    render(<App />);
    const heading = screen.getByText(/Vite + React/i);
    expect(heading).toBeInTheDocument();
  });
});
