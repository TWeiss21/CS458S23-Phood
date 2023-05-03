import { render, fireEvent } from '@testing-library/react'
import WarnMode from '../../components/WarnMode'


describe('WarnMode component', () =>{
    // set up the props for the nugget
    const props = {
        name: 'name',
        message:"The warning message",
        affirmitiveAction: "Yes",
        negativeAction:"No",
        functionWarnedAgainst: jest.fn()
    }

    // WarnMode Tests
    it('Testing Render the Modal Button', () =>{
        const { getByText } = render(<WarnMode {...props}/>)
        expect(getByText(props.name)).toBeInTheDocument()
    })

    //TODO: the passed function could be anything.. difficult to test.
    // it('Testing onClick Function when recipe container clicked', ()=>{
    //     const { getByTestId } = render(<Nugget {...props}/>)
    //     fireEvent.click(getByTestId('recipeContainer'))
    //     expect(props.onClick).toHaveBeenCalledWith(props.id)
    // })


})