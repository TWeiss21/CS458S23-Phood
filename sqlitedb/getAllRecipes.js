// describe the db client.. cant run this in pages. pages happen on client side.
//

import sqlite3 from 'sqlite3'
// const sqlite3 = require('sqlite3').verbose()

// open the database
const database = new sqlite3.Database('./sqlitedb/phooddb.sqlite', sqlite3.OPEN_READWRITE)


const selectAllRecipies = `SELECT * FROM  recipes`
let data = []

database.all(selectAllRecipies, [], (err, rows)=>{
    if(err){throw err}
    rows.forEach((row) => {
        
        // console.log('{ ' + 
        // row.id + ':' + 
        // row.name + ':' + 
        // row.description + ':' + 
        // row.steps + ':' + 
        // row.image + ':' + 
        // row.recipe_ingredient_id + ' }')

        
        data.push(row)
    })

    
})
export default data

// export default async function myFunc(database, callback){
//     database.all(selectAllRecipies, [], (err, rows)=>{
//         if(err){throw err}
//         rows.forEach((row) => {
            
//             // console.log('{ ' + 
//             // row.id + ':' + 
//             // row.name + ':' + 
//             // row.description + ':' + 
//             // row.steps + ':' + 
//             // row.image + ':' + 
//             // row.recipe_ingredient_id + ' }')
    
            
//             data.push(row)
//         })
//        // console.log('Data inside the database call: ' + data)
//         return callback(false, data[0])
//     })
// }



// export default myFunc(database, function(err, content){
//     if(err) throw(err)
//     let ExtData = content
//     return ExtData
//     console.log('the stuff')
//     console.log('stuff', ExtData)
// })

database.close()