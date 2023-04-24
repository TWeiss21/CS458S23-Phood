import { fireEvent, render, screen, getByRole} from '@testing-library/react'
import WarnMode from '@/components/WarningModal'
import '@testing-library/jest-dom'

describe('tests for WarningModal', () => {

    it('should render the modal', async () => {
        render(<WarnMode/>);
        const modal = screen.getByTestId("wrnBtn");
        expect(modal).toBeInTheDocument()
        fireEvent.click(modal);
        const Title = screen.getByTestId("title");
        expect(Title).toBeInTheDocument()
        const Cancel = screen.getByTestId("cncl");
        expect(Cancel).toBeInTheDocument()
        const Submit = screen.getByTestId("sbmt");
        expect(Submit).toBeInTheDocument()
    });
});