//Test to find out if a new recipe was added from a json file

const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite')
const recipes = require('../../mocks/RecipesCopy.json');
var insert = "INSERT INTO recipes (id, userId, name, description, steps, image) VALUES (?, ?, ?, ?, ?, ?)"
var select = "SELECT * FROM recipes WHERE id = 11"

const dataObj = JSON.parse(JSON.stringify(recipes[0]));

it('database to have new recipe entry inserted from a json file', () => {
    db.run (insert, [this.lastID++, 1, dataObj.recipe_name, dataObj.Description, JSON.stringify(dataObj.instructions), dataObj.image],
function(err) {
    console.log = jest.fn()
  if(err) {
    console.log(err.message)
  }

  db.all(select, [], (err,rows) => {
    if (err) {
        throw err
    }
    
    rows.forEach((row) => {
        log(row.id);
    })
    expect(console.log.mock.calls[0][0]).toBe(this.lastID);
    })

    
})
})