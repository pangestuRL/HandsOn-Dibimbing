import Button from "@/components/UI/Button";
import { render } from "@testing-library/react";

describe('Button component test', () => {
    it ('should handle button render', () => {
        const { container } = render(<Button>Test</Button>);
        expect (container).toMatchSnapshot();
    });
});