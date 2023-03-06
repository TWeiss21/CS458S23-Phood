// describe the db client.. cant run this in pages. pages happen on client side.
//
const sqlite3 = require('sqlite3').verbose()

// open the database
const database = new sqlite3.Database('./sqlitedb/phooddb.sqlite')


const selectAllRecipies = `SELECT * FROM  recipes`

database.all(selectAllRecipies, [], (err, rows)=>{
    if(err){throw err}
    rows.forEach((row) => {
        console.log('{ ' + 
        row.id + ':' + 
        row.name + ':' + 
        row.description + ':' + 
        row.steps + ':' + 
        row.image + ':' + 
        row.recipe_ingredient_id + ' }')
    })
})



database.close()