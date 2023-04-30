//The function that posts our recipes from the NewApiModal to our database

//Initializing our database
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite')

export default async function handler(req, res) {
  
    const { title, summary, instructions } = req.body;

    if(req.method === 'POST') {
//Database command to insert values into our tables
 db.run(`
      INSERT INTO recipes (userId, name, description, steps) VALUES (?, ?, ?, ?)`, 
    1, 
    title, 
    summary, 
    instructions,
    function (err) {
        //Adding not successful
        if (err) {
            console.log(err)
            res.status(500).json({ message: 'Error inserting recipe into database.' });
        }
        //Adding successful
        else {
            res.status(200).json({ message: 'Recipe inserted successfully!' });
        }
    }
    );


  }
};

