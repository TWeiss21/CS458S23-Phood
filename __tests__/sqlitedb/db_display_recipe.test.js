//Test to find the name of the first recipe from the database
export const log = logMsg => console.log(logMsg);
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

var recipe = "SELECT name FROM recipes WHERE id = 1";
it('console log to display name of first recipe in database', () => {
db.all(recipe, [], (err,rows) => {
    if(err){
        throw err;
    }
        console.log = jest.fn();
        rows.forEach((row) => {
            log(row.name);
        });
        
        expect(console.log.mock.calls[0][0]).toBe('Healthy Air Fryer Parmesan Chicken with Broccoli')
    });
});
