import { fireEvent, render, screen } from '@testing-library/react'
import AddRecipeModal from '@/components/AddRecipeModal'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Error } from '@mui/icons-material';

it('should render the AddRecipeModal button and open it', async () => {
    render(<AddRecipeModal />);
    const modal = screen.getByTestId("openModal");
    expect(modal).toBeInTheDocument()

    await fireEvent.click(modal);
    const Title = screen.getByTestId("title");
    expect(Title).toBeInTheDocument()
    const Save = screen.getByTestId("savebtn");
    expect(Save).toBeInTheDocument()
    const Close = screen.getByTestId("closebtn");
    expect(Close).toBeInTheDocument()
    const Img = screen.getByTestId("uploadimg");
    expect(Img).toBeInTheDocument()
    const Name = screen.getByTestId("nameentr");
    expect(Name).toBeInTheDocument()
    const Description = screen.getByTestId("descr");
    expect(Description).toBeInTheDocument()
    const Ingredient = screen.getByTestId("ingr");
    expect(Ingredient).toBeInTheDocument()
    const Quantity = screen.getByTestId("quant");
    expect(Quantity).toBeInTheDocument()
    const Measure = screen.getByTestId("msr");
    expect(Measure).toBeInTheDocument()
    const Add = screen.getByTestId("add");
    expect(Add).toBeInTheDocument()
    const Display = screen.getByTestId("display");
    expect(Display).toBeInTheDocument()
    const Steps = screen.getByTestId("steps");
    expect(Steps).toBeInTheDocument()
});

it('Should start searching for a measurement and find autocomplete', async () => {
    render(<AddRecipeModal />);
    const modal = screen.getByTestId("openModal");
    await fireEvent.click(modal);

    const autocomplete = screen.getByLabelText(/Measure/);
    await userEvent.type(autocomplete, 'tea')
    autocomplete.focus;
   // navigate to the first item in the autocomplete box
   await userEvent.type(autocomplete, '{arrowdown}');
   // select the first item
   await userEvent.type(autocomplete, '{enter}');
   // check the new value of the input field
   expect(autocomplete).toHaveValue("teaspoon")
});

it('Should not allow user to input an invalid character or extra characters', async () => {
    render(<AddRecipeModal />);
    const modal = screen.getByTestId("openModal");
    await fireEvent.click(modal);

    const quants = screen.getByLabelText(/#/);
    await userEvent.type(quants, '123.321')
    quants.focus;
    expect(quants).toHaveValue('123.32')
    await userEvent.clear(quants)
    await userEvent.type(quants, '/3132..')
    quants.focus;
    expect(quants).toHaveValue('3132.')
});

it('Should display error on typing of special characters', async () => {
    render(<AddRecipeModal />);
    const modal = screen.getByTestId("openModal");
    await fireEvent.click(modal);

    const measured = screen.getByLabelText(/Measure/);
    await userEvent.type(measured, 'as/')
    measured.focus;
    expect(measured).toBeInvalid(true);

    const ingreds = screen.getByLabelText(/Ingredient/);
    await userEvent.type(ingreds, 'as/')
    ingreds.focus;
    expect(ingreds).toBeInvalid(true);

});