// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Dashboard from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Dashboard/>)

        const heading = screen.getByRole('heading', {
            name: /Dashboard\.js!/i,
        })

        expect(heading).toBeInTheDocument()
    })
})