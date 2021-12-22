import Notifier from './Notifier';
import { render, screen } from 'test-utils';

describe('<Notifier /> component test', () => {
  const initialState = {
    aux: {
      alert: {
        type: 'error',
        message: 'Something went wrong!',
      },
    },
  };

  beforeEach(() => {
    render(<Notifier />, { initialState });
  });

  it('should render error icon', async () => {
    expect(screen.queryByTestId('ErrorOutlineIcon')).toBeInTheDocument();
  });

  it('should render error text', async () => {
    expect(screen.queryByText('Something went wrong!')).toBeInTheDocument();
  });
});

