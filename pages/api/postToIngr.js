const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

export default async function handlerIngr(_req, res) {
    if(_req.method === 'POST'){

        var item_data = JSON.parse(_req.body);
        console.log(_req.body);

        //console.log("Random shit");
        //console.log(item_data);

        db.run('INSERT INTO ingredients (pantryId, name, measurementValue, measurementUnit) VALUES (?, ?, ?, ?)',
        1,
        item_data.name,
        item_data.quant,
        item_data.msr,
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