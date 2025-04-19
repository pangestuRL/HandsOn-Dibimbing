import LoginPage from '@/components/pages/LoginPage';
import { fireEvent, render } from '@testing-library/react';

describe('LoginPage component test', () => {
  it('should render', () => {
    const { container } = render(<LoginPage />);

    expect(container).toMatchSnapshot();
  });

  it('should check if label username available', () => {
    const { getByLabelText } = render(<LoginPage />);

    expect(getByLabelText('username')).toBeInTheDocument();
  });

  it('should click the button', () => {
    const { getByText } = render(<LoginPage />);

    const button = getByText('login');
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });

  it('should handle login', () => {
    const { getByLabelText, getByText } = render(<LoginPage />);
    const usernameInput = getByLabelText('username');
    const passwordInput = getByLabelText('password');
    const buttonLogin = getByText('login');

    // expect render
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: 'kyra@email.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(buttonLogin);

    // expect value
    expect(usernameInput).toHaveValue('kyra@email.com');
    expect(passwordInput).toHaveValue('123456');
  });
});
