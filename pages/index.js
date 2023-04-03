import Dashboard from '../components/dashboard.jsx'
import AddRecipeModal from '@/components/AddRecipeModal.jsx'

/*This is the function that actually gets the data from the server.
With react you want to pull as much state/data as far up for managment by the program so that each
"branch of the dom can have access to it easily"*/

// getServerSideProps, NextJS function that will allows Server-Side Rendering(with dev command will behave like getStaticProps), good for
//getting data at each request of the page instead of at build time.
//Docs Link: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps = async () => {

    // Fetch will server side render from the http endpoint added
    const res = await fetch('http://localhost:3000/api/getData')
    const data = await res.json()
    return {
        props: { recipes: data}
    }
}
// { recipies } - put in braces
const Index = ({recipes}) => {
    return ( <div>
        {/* {Straighten that data out, make it useable} */}

         <Dashboard/>
         {/* Below is a testing block, Just want to make sure data is getting to the top level index before coding lower*/}
        {/* { recipes.map(recipe => (
        <div key={recipe.id}>
        {recipe.name}
        </div>
        ))} */}
        
        {/* ADD Recipe MOdal, produes functional blue text button outside of the blockout, uncomment for testing */}
        {/* <AddRecipeModal/> */}
     </div>
    )
    // <Dashboard/>
    
    }


export default Index