import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App /> component test', () => {
  it('should render logo text', () => {
    render(<App />);
    const logoText = screen.getByText(/Elvisolutions Test Task/i);
    expect(logoText).toBeInTheDocument();
  });
});
