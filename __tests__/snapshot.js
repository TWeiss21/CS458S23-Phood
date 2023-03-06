import { Dashboard } from '@mui/icons-material'
import { render } from '@testing-library/react'
import { Index, Home } from '../pages/index'

it("renders homepage unchanged", () => {
    const { container } = render(<Dashboard/>);
    expect(container).toMatchSnapshot();
});
