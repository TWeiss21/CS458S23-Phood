const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

export default async function handleAddSL(_req, res) {
    if(_req.method === 'POST'){
console.log(_req.body);
        
        var item = JSON.parse(_req.body)
        // var count = 0;
        // if(JSON.stringify(item[9].name)!="undefined")
        //     console.log("NULL");
        db.run('INSERT INTO shoppingList (pantryId, name, measurementValue, measurementUnit ) VALUES (?, ?, ?, ?)',
        1,
        item[0].name,
        item[0].measurementValue,
        item[0].measurementUnit,
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