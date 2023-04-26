// __tests__/index.test.jsx

import { fireEvent, render, screen } from '@testing-library/react'
import RecipeList from '../../components/RecipeList'
import '@testing-library/jest-dom'
import Nugget from '@/components/TheNugget'

export const log = logMsg => console.log(logMsg);
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

describe('Tests for RecipeList', () => {
    // let arrayOfRecipe = [{
    //     'id': '1',
    //     'name': 'cherry'
    // }]
    // props = {
    //     data: arrayOfRecipe
    // }
    it('renders a heading', async () => {
    render(
        // <RecipeList {...props}/>
        <RecipeList/>
        //<Nugget/>
        )
    })

    var ingredientsFromSL = "SELECT * FROM shoppingList";
    it('retrieves ingredients from recipe and post SL DB', async () =>{
        render(<Nugget/>);
        const plusBtn = screen.getByTestId("listPlus");
        expect(plusBtn).toBeInTheDocument();

        fireEvent.click(plusBtn);

        //check that props has an int
        //check that there are 1+ ingredients associated with the recipe (count)
        //check to see if ingredients posted to SL db
        db.all(ingredientsFromSL, [], (err,rows) =>{
            if(err){
                throw err;
            }
            console.log = jest.fn();
            rows.forEach((row) => {
                log(row.name);
            })
            expect(console.log.mock.calls[0][0]).toBe('Panko')
        })
    })
})