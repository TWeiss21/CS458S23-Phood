// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import RecipeList from '../../components/RecipeList'
import Nugget from '@/components/TheNugget'
import '@testing-library/jest-dom'




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
})