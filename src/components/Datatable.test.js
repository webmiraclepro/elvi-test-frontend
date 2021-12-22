import Datatable from './DataTable';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Datatable /> component test', () => {
  const onRowSelect = jest.fn();

  beforeEach(() => render(
    <Datatable
      columns={[
        { id: 'username', numeric: false, label: 'Username' },
        { id: 'phone', numeric: false, label: 'Phone' },
        { id: 'email', numeric: false, label: 'Email' },
      ]}
      rows={[
        { id: 1, username: 'user1', phone: '123456789', email: 'user1@email.com' },
        { id: 2, username: 'user2', phone: '123456789', email: 'user2@email.com' },
        { id: 3, username: 'user3', phone: '123456789', email: 'user3@email.com' },
      ]}
      onRowSelect={onRowSelect}
    />
  ));

  it('should render table exact count of rows', async () => {
    expect(screen.queryAllByRole('row').length).toBe(4);
  });

  describe('when clicking table row', () => {
    it('should call onRowSelect', async () => {
      await userEvent.click(screen.getByText('user1@email.com'));
      await userEvent.click(screen.getByText('user2@email.com'));
      expect(onRowSelect).toHaveBeenCalledTimes(2);
    });
  })
});
