const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

export default async function handleAddSL(_req, res, total) {
    if(_req.method === 'POST'){
    let url = _req.url;
    total = url.substring(url.lastIndexOf('=') + 1);
        
        var item = JSON.parse(_req.body);

        for (var i = 0; i < total; i++){
            db.run('INSERT INTO shoppingList (pantryId, name, measurementValue, measurementUnit ) VALUES (?, ?, ?, ?)',
            item[i].pantryId,
            item[i].name,
            item[i].measurementValue,
            item[i].measurementUnit,
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
    }
};