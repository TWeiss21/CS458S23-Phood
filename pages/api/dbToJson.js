const sqlite3 = require('sqlite3').verbose()
const fs = require('fs')
//Connect to databse
let db = new sqlite3.Database('./sqlitedb/phooddb.sqlite')

var pantrySelect = "SELECT * FROM pantry"

//Run a command on the databse that grabs all the data from the pantry 
db.all(pantrySelect, function(err,rows) {
    if(err) {
        console.err(err.message)
        return
    }

    //Puts all the data into a json readable version
    let jsonData = JSON.stringify(rows)

    //Writes the data from the stringified pantry data into a file called pantryData.json
    fs.writeFile('pantryData.json', jsonData, function(err) {
        if(err) {
            console.err(err.message)
            return
        }
        console.log("Data written to file sucessfully!")
    })
})

//Close the database connection
db.close()