import { Dashboard } from '@mui/icons-material'
import { render } from "@testing-library/react"
import { Index, Home } from '../pages/index'

describe('renders homepage unchanged', () => {
    it("Matches DOM Snapshot", () => {
        const { container } = render(<Index/>);
        expect(container).toMatchSnapshot();
    });
});