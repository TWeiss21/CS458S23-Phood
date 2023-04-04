//import json_data from '/components/AddRecipeModal.jsx'
const sqlite3 = require('sqlite3').verbose();
//import _req from 'components/AddRecipeModal'

const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

export default async function handlerIngr(_req, res) {
  if(_req.method === 'POST'){

    var ingr_data = JSON.parse(_req.body);

    db.run(
      'INSERT INTO pantry (name) VALUES (?)',
      ingr_data[0].text2,
      function (err) {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Something went wrong' });
        } else {
          res.status(200).json({ id: this.lastID });
        }
      }
    )

  }
};