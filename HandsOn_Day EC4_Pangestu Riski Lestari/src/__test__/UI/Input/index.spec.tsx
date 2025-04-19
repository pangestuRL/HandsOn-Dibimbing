import Input from '@/components/UI/Input';
import { fireEvent, render } from '@testing-library/react';

describe('Input component test', () => {
  it('should render', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });

  it('should render textarea', () => {
    const { container } = render(<Input type="textarea" />);

    expect(container).toMatchSnapshot();
  });

  it('should handle change', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input onChange={onChange} type="text" placeholder="username" />
    );
    const input = getByPlaceholderText('username');
    fireEvent.change(input, { target: { value: 'kyra@email.com' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('kyra@email.com');
  });
});
