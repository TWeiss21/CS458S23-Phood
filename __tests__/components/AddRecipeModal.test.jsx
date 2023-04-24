import { fireEvent, render, screen, getByRole} from '@testing-library/react'
import { onSubmit, AddRecipeModal, Dialog} from '@/components/AddRecipeModal'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import RecipeList from '@/components/dashboard'
import {expect, jest, test} from '@jest/globals'

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

    it('should update the text fields when users enter information', async () => {
        render(<RecipeList/>);
        const modal = screen.getByTestId("openModal");
        fireEvent.click(modal);

        const Name = screen.getByTestId("nameentr");
        await userEvent.type(Name, 'blah');
        Name.focus();
        expect(Name).toHaveValue("blah");
        const Desc = screen.getByTestId("descr");
        await userEvent.type(Desc, 'blahblah');
        Desc.focus();
        expect(Desc).toHaveValue('blahblah');
        const Steps = screen.getByTestId("steps");
        await userEvent.type(Steps, 'blahblahblah');
        Steps.focus();
        expect(Steps).toHaveValue('blahblahblah');

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

    const original = window.location;

  const reloadFn = () => {
    window.location.reload();
  };

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', { configurable: true, value: original });
  });

const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

var recipe = "SELECT name FROM recipes"
    it('Should refresh the page and show when a new recipe is added', async () => {
            
            db.all(recipe, [], (err,rows) => {
                if(err){
                    throw err;
                }
                    render(<RecipeList/>);
            recipeNum = 0;
            recipeNum2 = 0;
                    rows.forEach(() => {
                        recipeNum++;
                    });
            const modal = screen.getByTestId("openModal");
            fireEvent.click(modal);
    
            const nm = screen.getByLabelText(/Name/);
            nm.focus;
            fireEvent.change(nm, {target: {value: 'Quiche'}});
            
            fireEvent.submit(screen.getByTestId("savebtn"));
            
            fireEvent.click(screen.getByTestId("closebtn"));

            expect(window.location.reload).toHaveBeenCalledTimes(2);
                
            rows.forEach(() => {
                recipeNum2++;
            });
                    expect(recipeNum2).toEqual(recipeNum + 1);
                });
            
    });
});