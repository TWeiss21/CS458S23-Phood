import Dashboard from '../components/dashboard.jsx'
import AddRecipeModal from '@/components/AddRecipeModal.jsx'
//TODO: comment out how everything works currently
//TODO: reformat all code for readability
//PR to main
// dumb bug(wont populate data until repeated refresh) still thowing for loop, solve issue async/await
//Testing


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
    //console.log(data)
    return {
        props: { recipes: data}
    }
}

const Index = ({recipes}) => 
{
    //TESTING array let arr = [{"id":"1", "name":"Balt"},{"id":"2", "name":"Tokyo" }]
    //console.log(recipes)
        return ( 
            <div>
                <Dashboard whatever = { recipes }/>
            </div>
        )
}


export default Index