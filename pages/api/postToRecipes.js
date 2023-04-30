const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite')

export default async function handler(req, res) {
  
    const { title, summary, instructions } = req.body;

    if(req.method === 'POST') {

 db.run(`
      INSERT INTO recipes (userId, name, description, steps) VALUES (?, ?, ?, ?)`, 
    1, 
    title, 
    summary, 
    instructions,
    function (err) {
        if (err) {
            console.log(err)
            res.status(500).json({ message: 'Error inserting recipe into database.' });
        }
        else {
            res.status(200).json({ message: 'Recipe inserted successfully!' });
        }
    }
    );


  }
};

