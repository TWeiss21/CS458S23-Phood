import Dashboard from '../components/dashboard.jsx'
import AddRecipeModal from '@/components/AddRecipeModal.jsx'

export const getStaticProps = async () => {

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
         <Dashboard/>
        { recipes.map(recipe => (
        <div key={recipe.id}>
        {recipe.name}
        </div>
        ))}
        <AddRecipeModal/>
     </div>
    )
    // <Dashboard/>
    
    }

export default Index