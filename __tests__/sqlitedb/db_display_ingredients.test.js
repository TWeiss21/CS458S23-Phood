//Test to find the name of the first ingredient from the database
export const log = logMsg => console.log(logMsg);
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

var ingredient = "SELECT name FROM ingredients WHERE id = 1";

it('console log to display name of first ingredient in database', () => {
    db.all(ingredient, [], (err,rows) => {
        if(err) {
            throw err;
        }
        console.log = jest.fn();
        rows.forEach((row) => {
            log(row.name);
        })
        expect(console.log.mock.calls[0][0]).toBe('panko')
    })
})
