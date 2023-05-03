import { render, fireEvent} from '@testing-library/react'
import RecipeDetailButtonRow from '../../components/RecipeDetailButtonRow'


describe('RecipeDetailButtonRow component', () =>{


    // RecipeDetailButtonRow Tests
    it('Testing Buttons', () =>{
        //get the parts of the button row
        const { getByText } = render(<RecipeDetailButtonRow/>)
        const deleteBtn = getByText('Delete')
        const addBtn = getByText('Add to List')
        const editBtn = getByText('Edit')

        //are the buttons in the doc?
        expect(deleteBtn).toBeInTheDocument()
        expect(addBtn).toBeInTheDocument()
        expect(editBtn).toBeInTheDocument()
    })

    it('Testing - Delete Button',()=>{

    })

})