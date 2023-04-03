// describe the db client.. cant run this in pages. pages happen on client side.
//

import sqlite3 from 'sqlite3'
// const sqlite3 = require('sqlite3').verbose()

// open the database
const database = new sqlite3.Database('./sqlitedb/phooddb.sqlite', sqlite3.OPEN_READWRITE)


const selectAllRecipies = `SELECT * FROM  recipes`

// add promises.. how?

let data = []



    database.all(selectAllRecipies, [], (err, rows)=>{
        if(err){throw err}
        rows.forEach((row) => {
            
            data.push(row)
        })
        //Print the data after some amt time for initial testing
        //printTestData(data,4000)
        
    })

function printTestData(d, waitTime){
    /*TEST CODE FOR PRINTING OUT EACH ITEM IN ROW*/
    console.log("----- --- - PRINTING TEST DATA FROM THE DATABASE.ALL FUNCTION - --- ----- \n\n\n\n")

    //Make em wait for it with setTimout, takes a callback function, then a time
    setTimeout(()=>{console.log(d)}, waitTime)
}
export default data

database.close()