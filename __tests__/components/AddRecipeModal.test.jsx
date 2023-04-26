import { fireEvent, render, screen, getByRole} from '@testing-library/react'
import handlerIngr from '/pages/api/postToIngr'
import { onSubmit, AddRecipeModal, Dialog} from '@/components/AddRecipeModal'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import RecipeList from '@/components/dashboard'
import {expect, jest, test} from '@jest/globals'
//const sqlite3 = require('sqlite3');
//const sqlite3Mem = require('sqlite3-mem');
//const fetchMock = require('jest-fetch-mock');
//const myModule = require('/components/AddRecipeModal');

//fetchMock.enableMocks();

// const db = new sqlite3.Database(':memory:');
// sqlite3Mem.patchDatabase(db);

describe('AddRecipeModal', () => {
    it('should render the AddRecipeModal button and open it', async () => {
        render(<RecipeList/>);
        const modal = screen.getByTestId("openModal");
        expect(modal).toBeInTheDocument()

        fireEvent.click(modal);
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
        render(<RecipeList/>);
        const modal = screen.getByTestId("openModal");
        fireEvent.click(modal);
        
        const autocomplete = screen.getByLabelText(/Measure/);
        await userEvent.type(autocomplete, 'tea')
        autocomplete.focus;
        // navigate to the first item in the autocomplete box
        await userEvent.type(autocomplete, '{arrowdown}');
        // select the first item
        await userEvent.type(autocomplete, '{enter}');
        // check the new value of the input field
        expect(autocomplete).toHaveValue("teaspoon")
        autocomplete.clear;
    });

    it('Should not allow user to input an invalid character or extra characters', async () => {
        render(<RecipeList/>);
        const modal = screen.getByTestId("openModal");
        fireEvent.click(modal);

        const quants = screen.getByLabelText(/#/);
        await userEvent.type(quants, '123.321')
        quants.focus;
        expect(quants).toHaveValue('123.32')
        await userEvent.clear(quants)
        await userEvent.type(quants, '-3132..')
        quants.focus;
        expect(quants).toHaveValue('3132.')
        quants.clear;
    });

    it('Should display error on typing of special characters', async () => {
        
        render(<RecipeList/>);
        const modal = screen.getByTestId("openModal");
        fireEvent.click(modal);

        const measured = screen.getByLabelText(/Measure/);
        await userEvent.type(measured, 'as/');
        measured.focus;
        expect(measured).toBeInvalid(true);

        const ingreds = screen.getByLabelText(/Ingredient/);
        await userEvent.type(ingreds, 'as/');
        ingreds.focus;
        expect(ingreds).toBeInvalid(true);

        measured.clear;
        ingreds.clear;

    });

    it('Should return an error if fields are null', async () => {

        render(<RecipeList/>);
        const modal = screen.getByTestId("openModal");
        fireEvent.click(modal);

        const measured = screen.getByLabelText(/Measure/);
        const ingreds = screen.getByLabelText(/Ingredient/);
        const num = screen.getByLabelText(/#/);
        const Name = screen.getByTestId("nameentr");
        const Save = screen.getByTestId("savebtn");
        const Description = screen.getByTestId("descr");
        const Steps = screen.getByTestId("steps");
        const add = screen.getByTestId("add");

        measured.value = null;
        ingreds.value = null;
        num.value = null;
        Name.value = null;
        Description.value = null;
        Steps.value = null;

        fireEvent.click(add);
        fireEvent.click(Save);

        expect(() => {
            handleAdd(null);
        }).toThrow();

    });

    // it('Should save user input for ingredients', async () => {
    //     const db = jest.fn('/sqlitedb/phooddb.sqlite')
    //     render(<RecipeList/>);
    //     const modal = screen.getByTestId("openModal");
    //     fireEvent.click(modal);

    //     const measured = screen.getByLabelText(/Measure/);
    //     const ingreds = screen.getByLabelText(/Ingredient/);
    //     const num = screen.getByLabelText(/#/);

    //     const add = screen.getByTestId("add");

    //     await userEvent.type(num, '123.3');
    //     await userEvent.type(ingreds, 'bananas');
    //     await userEvent.type(measured, 'cups');

    //     fireEvent.click(add);

    //     const response = await handlerIngr();
    //     expect(response).not.toBeNull();
    //     expect(response.status).toBe(200);
    // })

    // it('Should post user input successfully', async () => {
    //     //Mock request
    //     const requestData = {
    //         name: 'turnips'
    //     };

    //     // Mock AJAX response
    //     fetchMock.mockOnce(JSON.stringify({ success: true}), {
    //         status: 200,
    //         headers: { 'Content-Type': 'application/json' }
    //     });

    //     //Call the function that makes AJAX POST
    //     const response = await myModule.makeAjaxPostRequest(requestData);

    //     //Assert response status
    //     expect(fetchMock.mock.calls.length).toBe(1);
    //     expect(fetchMock.mock.calls[0][0]).toBe('http://localhost:3000/api/postToPantry');
    //     expect(fetchMock.mock.calls[0][1].method).toBe('POST');
    //     expect(fetchMock.mock.calls[0][1].headers['Content-Type']).toBe('application/json');
    //     expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual(requestData);
    //     expect(response).toEqual({ success: true });
    // });
});