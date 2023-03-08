//Test to find the name of the first measurement from the database
export const log = logMsg => console.log(logMsg);
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

var measurement = "SELECT unit FROM measurements WHERE id = 1"

it('console log to display name of first measurement in database', () => {
    db.all(measurement, [], (err,rows) => {
        if(err) {
            throw err;
        }
        console.log = jest.fn();
        rows.forEach((row) => {
            log(row.name);
        })
        expect(console.log.mock.calls[0][0]).toBe('cups')
    })
})
