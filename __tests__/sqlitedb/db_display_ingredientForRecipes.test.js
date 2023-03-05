//Test to find the id of all of the ingredients belonging to the first recipe from the database
export const log = logMsg => console.log(logMsg);
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');

var ingredientsForRecipes = "SELECT ingredientId FROM ingredientsForRecipes WHERE relationId = 1";

it('console log to display id of first ingredient from the ingredientsForRecipes table in database', () => {
    db.all(ingredientsForRecipes, [], (err,rows) => {
        if(err) {
            throw err;
        }
        console.log = jest.fn();
        rows.forEach((row) => {
            log(row.name);
        })
        expect(console.log.mock.calls[0][0]).toBe(1);
    })
})
