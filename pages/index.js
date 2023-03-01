import Dashboard from '../components/dashboard.jsx'

import sqlite3 from 

// const database = new sqlite3.Database('../sqlitedb/phoddb.sqlite')

// export const getStaticProps = async () => {
//     const res = await fetch('../mocks/Recipes.json')
//     console.log(res)
//     const data = await res.json()

//     return {
//         props: { recipies: data}
//     }
// }
// { recipies } - put in curly
const Index = () => (
    // <div>
         <Dashboard/>
    //     {recipies.map(recipe => <div key={recipe.id}>

    //         {recipe.name}
    //     </div>)}
    // </div>
)

export default Index