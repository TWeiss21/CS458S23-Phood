import { render, fireEvent } from '@testing-library/react'
import Nugget from '../../components/TheNugget'

//Run a specific jest test file with jest example.test.js
//Run a specific test in the test file with jest --testNamePattern='name of the function' example.test.js

describe('Nugget component', () =>{
    // set up the props for the nugget
    const props = {
        id: 4452,
        recipeName: 'Filler Recipe name',
        onClick: jest.fn(),
        onGetIngredients: jest.fn()
    }

    // Nugget Tests
    it('render Nugget Recipe Name', () =>{
        const { getByText } = render(<Nugget {...props}/>)
        expect(getByText(props.recipeName)).toBeInTheDocument()
    })

    it('Testing onClick Function when recipe container clicked', ()=>{
        const { getByTestId } = render(<Nugget {...props}/>)
        fireEvent.click(getByTestId('recipeContainer'))
        expect(props.onClick).toHaveBeenCalledWith(props.id)
    })


})