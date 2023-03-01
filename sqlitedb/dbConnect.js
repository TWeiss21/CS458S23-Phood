// describe the db client.. cant run this in pages. pages happen on client side.
//
const sqlite3 = require('sqlite3').verbose()

// open the database
const database = new sqlite3.Database('./phooddb.sqlite')


let selectAllRecipies = `SELECT * FROM  RECIPES;`

database.all(selectAllRecipies, [], (err, rows)=>{
    if(err){throw err}
    rows.forEach((row) => {
        console.log(row.name)
    })
})

database.close()