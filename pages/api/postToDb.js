const sqlite3 = require('sqlite3').verbose();
//Connect to database
const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');
//Grab json file full of mock recipes
let recipes = require('../../mocks/RecipesCopy.json');

//Parsing data from json file to make it more readable to the database
const dataObj = JSON.parse(JSON.stringify(recipes[0]));


//Running a command on the database that inserts the data from the json file directly into the database
db.run ('INSERT INTO recipes (id, userId, name, description, steps, image) VALUES (?, ?, ?, ?, ?, ?)', 
[this.lastId++, 1, dataObj.recipe_name, dataObj.Description, JSON.stringify(dataObj.instructions), dataObj.image],
function(err) {
  if(err) {
    console.log(err.message)
  }
  console.log(`A row has been inserted with rowid ${this.lastID}`)
})

//Close the database connection
db.close()






