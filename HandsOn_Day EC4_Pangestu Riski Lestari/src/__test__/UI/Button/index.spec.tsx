import Button from '@/components/UI/Button';
import { fireEvent, render } from '@testing-library/react';

describe('Button component test', () => {
  it('should handle button render', () => {
    const { container } = render(<Button>Test</Button>);

    expect(container).toMatchSnapshot();
  });

  it('should click the button', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Submit</Button>);

    const button = getByText('Submit');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
