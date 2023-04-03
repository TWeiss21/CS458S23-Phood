//Connect to database
/*
const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');
//Grab json file full of mock recipes
//let recipes = require('../../mocks/RecipesCopy.json');

//Parsing data from json file to make it more readable to the database
//const dataObj = JSON.parse(JSON.stringify(recipes[0]));


//Running a command on the database that inserts the data from the json file directly into the database


db.run ('INSERT INTO recipes (id, userId, name, description, steps, image) VALUES (?, ?, ?, ?, ?, ?)', 
[this.lastId++, 1, dataObj.recipe_name, dataObj.Description, JSON.stringify(dataObj.instructions), dataObj.image],
function(err) {
  if(err) {
    console.log(err.message)
  }
  console.log(`A row has been inserted with rowid ${this.lastID}`)
})
}


//Close the database connection
db.close()
*/
//import json_data from '/components/AddRecipeModal.jsx'
const sqlite3 = require('sqlite3').verbose();
//import _req from 'components/AddRecipeModal'

const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

export default async function handler(_req, res) {
  //const {name, desc } = req.body;

  if(_req.method === 'POST') {
    //try {
      
      // Parse the JSON data from the request body
      const json_data = JSON.parse(_req.body);

      db.run(
        'INSERT INTO recipes (description, steps) VALUES (?, ?)',
        json_data[desc, steps],
        function (err) {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong' });
          } else {
            res.status(200).json({ id: this.lastID });
          }
        }
      );
  
      // Insert the JSON data into the database
      //const sql = 'INSERT INTO recipes (json_data) VALUES (?)';
      // db.run(sql, JSON.stringify(json_data), (err) => {
      //   if (err) {
      //     console.error(err);
      //     res.status(500).end();
      //   } else {
      //     res.status(200).end();
      //   }
     // });
    //}
  //  catch (error) {
  //     console.error(error);
  //     res.status(500).end();
  //   } finally {
  //     db.close();
  //   }
}
}
