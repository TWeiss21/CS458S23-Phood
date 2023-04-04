//import json_data from '/components/AddRecipeModal.jsx'
const sqlite3 = require('sqlite3').verbose();
//import _req from 'components/AddRecipeModal'

const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

export default async function handler(_req, res) {

  if(_req.method === 'POST') {
    //try {
      
      // Parse the JSON data from the request body
      var json_data = JSON.parse(_req.body);
      
      //json_data = JSON.stringify(_req.body);

      db.run(
        'INSERT INTO recipes (name, description, steps) VALUES (?, ?, ?)',
        json_data[0].name,
        json_data[0].desc,
        json_data[0].steps,
        function (err) {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong' });
          } else {
            res.status(200).json({ id: this.lastID });
          }
        }
      ); 
}
};