import { createMocks }   from 'node-mocks-http'
import handlerIngr from '/pages/api/postToIngr'
import handleAdd from '/components/AddRecipeModal.jsx'
import RecipeList from '@/components/dashboard'
import db from '/pages/api/postToIngr.js'

// describe('Test responses for ingredient api', () => {
//     it('Should return status 200 with valid request body', async () => {
//         const { req, res } = createMocks({
//             method: 'POST',
//             body: JSON.stringify({
//                 item_data,
//             }),
//         });
//         await handlerIngr(req, res);
//         expect(res._getStatusCode()).toBe(200);
//         expect(JSON.parse(res._getData())).toEqual(
//             expect.objectContaining({
//                 item_data,
//             }),
//         );
//     });
// });

describe("Axios requests suite", () => {
    it('Should save user input for ingredients', async () => {
        db = jest.fn()
        render(<RecipeList/>);
        const modal = screen.getByTestId("openModal");
        fireEvent.click(modal);

        const measured = screen.getByLabelText(/Measure/);
        const ingreds = screen.getByLabelText(/Ingredient/);
        const num = screen.getByLabelText(/#/);

        const add = screen.getByTestId("add");

        await userEvent.type(num, '123.3');
        await userEvent.type(ingreds, 'pudding');
        await userEvent.type(measured, 'cups');

        fireEvent.click(add);

        const response = await handlerIngr();
        expect(response).not.toBeNull();
        expect(response.status).toBe(200);
    })
})
