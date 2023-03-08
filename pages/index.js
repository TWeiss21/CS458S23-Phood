import Dashboard from '../components/dashboard.jsx'

export const getStaticProps = async () => {

    // Todo replace this line with your data endpoint from your database. populate wiht actual data
    const res = await fetch('http://localhost:3000/api/getData')
    // console.log(res)
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
     </div>
    )
    // <Dashboard/>
    }

export default Index