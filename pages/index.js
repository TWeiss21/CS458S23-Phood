import Dashboard from '../components/dashboard.jsx'

//const sqlite3 = require('sqlite3')

// const database = new sqlite3.Database('../sqlitedb/phoddb.sqlite')

// export const getStaticProps = async () => {
//     const res = await fetch('../sqlitedb/phooddb.sqlite')
//     // console.log(res)
//     const data = await res.json()

//     return {
//         props: { recipies: data}
//     }
// }
// { recipies } - put in braces
const Index = () => (
    //  <div>
    //      <Dashboard/>
    //     {recipies.map(recipe => <div key={recipe.id}>

    //          {recipe.name}
    //     </div>)}
    //  </div>
    <Dashboard/>
)

export default Index