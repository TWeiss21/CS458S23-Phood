import React from 'react'
import { render, screen } from '@testing-library/react'
import RecipeDetail from './RecipeDetail'

//screen obj captures all rendered stuff.
describe('Testing RecipeDetail', () =>{
    test('does the recipe title render?', ()=>{
        render(<RecipeDetail RecipeData={['Pizza','only the best possible pizza','1.by frozen, 2.oven until ready, 3.dont burn', [1]]}/>)
        const recipeTitle = screen.getByText('/Pizza/i')
        expect(recipeTitle).toBeInTheDocument()
    })

    test('Does the RecipeDetail render the description?', ()=>{
        render(<RecipeDetail RecipeData={['Pizza','only the best possible pizza','1.by frozen, 2.oven until ready, 3.dont burn', [1]]}/>)
        const recipeDescription = screen.getByText('/only the best possible pizza/i')
        expect(recipeDescription).toBeInTheDocument()
    })
})