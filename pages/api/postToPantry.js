//import json_data from '/components/AddRecipeModal.jsx'
const sqlite3 = require('sqlite3').verbose();
//import _req from 'components/AddRecipeModal'

const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');
//const rows = db.prepare(query);

export default async function handlerPantry(_req, res) {
  if(_req.method === 'POST'){

    var ingr_data = JSON.parse(_req.body);

    console.log(ingr_data);

    db.run('INSERT INTO pantry (name) VALUES (?)',
          ingr_data[0].name,
            function (err) {
              if (err) {
                res.status(500).json({ error: 'Something went wrong' });
              } else {
                res.status(200).json({ id: this.lastID });
              }
            })
  }
};

    // db.all(query, [], (err, rows)=>{
    //   if(err){throw err}
    //   rows.forEach((row) => {
    //     data.push(row);
    //     const specificRow = data.find(row => row.name === ingr_data);
    //     if (!specificRow) {
    //       console.log(row);
    //       push,
    //       ingr_data,
          
    //     }
    //     else {
    //       return;
    //     }
    //   })
    // })
      // if (itemSet.has(row.item)) {
      //   console.log('Duplicate item found!');
      //   return;
      // } else {
        
      // }