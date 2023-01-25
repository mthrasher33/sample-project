import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('The App component', () => {
  test('renders a greeting', () => {
    const greetingText = 'Hello world!';
    render(<App />);
    expect(screen.getByText(greetingText)).toBeInTheDocument();
  });
});
