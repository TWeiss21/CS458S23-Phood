import Index from '@/pages/index'

describe('index', () => {

    it('should load the index page that contains the dashboard', () => {
        render(<Index/>);
        const src = screen.getByTestId("indx");
        expect(src).toBeInTheDocument();

    });
});