import Dashboard from '../components/dashboard.jsx'
// import AddRecipeModal from '@/components/AddRecipeModal.jsx'

/*This is the function that actually gets the data from the server.
With react you want to pull as much state/data as far up for managment by the program so that each
"branch of the dom can have access to it easily"*/

// getServerSideProps, NextJS function that will allows Server-Side Rendering(with dev command will behave like getStaticProps), good for
//getting data at each request of the page instead of at build time.
//Docs Link: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps = async () => {

    // Fetch will server side render from the http endpoint added
    const res = await fetch('http://localhost:3000/api/getRecipes', {
        headers:{
            Accept: 'application/json'
        }
    })
    const second = await fetch('http://localhost:3000/api/getIngredients', {
        headers:{
            Accept: 'application/json'
        }
    })
    const returnedFromShoppingList = await fetch('http://localhost:3000/api/getShoppingList', {
        headers:{
            Accept: 'application/json'
        }
    })
    //also fetch from the http://localhost:3000/api/getIngredientsForSpecificRecipe?id={id that was clicked}
  
    const ings = await second.json()
    const data = await res.json()
    const shoppingList = await returnedFromShoppingList.json()

    // console.log("ings : ",ings)
    // console.log("data : ", data)
    return {
        props: { recipes: data, 
            ingredients: ings,
            SL: shoppingList,
        }
    }
}

const Index = ({recipes, ingredients, SL}) => 
{
//INDEX FUNCTIONS

    // console.log(recipes)
    //TESTING array let arr = [{"id":"1", "name":"Balt"},{"id":"2", "name":"Tokyo" }]
        return ( 
            <div>
                <Dashboard 
                allRecipes = { recipes } 
                allingredients = { ingredients } 
                shoppingList = {SL} 
                />
            </div>
        )
}

export default Index