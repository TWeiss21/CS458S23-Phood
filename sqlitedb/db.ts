import * as sqlite3 from "sqlite3";
const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err: any) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    const sqlUsers =
      "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT,name text,email text UNIQUE,CONSTRAINT email_unique UNIQUE (email), address text UNIQUE,CONSTRAINT address_unique UNIQUE (address));";
    db.run(sqlUsers, (err: { message: any; }) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'users' table");
    });
    const sqlPantry =
      "CREATE TABLE IF NOT EXISTS pantry (id INTEGER PRIMARY KEY AUTOINCREMENT,food_name text, FOREIGN KEY (user_id) REFERENCES user(id));";
    db.run(sqlPantry, (err: { message: any; }) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'pantry' table");
    });
    const sqlIngredient =
      "CREATE TABLE IF NOT EXISTS ingredients (id INTEGER PRIMARY KEY AUTOINCREMENT, FOREIGN KEY (Pantry_id) REFERENCES pantry(id), FOREIGN KEY (unit_id) REFERENCES unit(id));";
    db.run(sqlIngredient, (err: { message: any; }) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'ingredients' table");
    });
    const sqlMeasurement =
      "CREATE TABLE IF NOT EXISTS measurements (id INTEGER PRIMARY KEY AUTOINCREMENT, unit_name text);";
    db.run(sqlMeasurement, (err: { message: any; }) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'measurements' table");
    });
    const sqlList =
      "CREATE TABLE IF NOT EXISTS list (id INTEGER PRIMARY KEY AUTOINCREMENT, list_name text, FOREIGN KEY (ingredient_id) REFERENCES ingredients(id), FOREIGN KEY (recipe_id) REFERENCES recipes(id), FOREIGN KEY (user_id) REFERENCES user(id));";
    db.run(sqlList, (err: { message: any; }) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'list' table");
    });
    const sqlRecipe =
      "CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, recipe_name text, FOREIGN KEY (ingredient_id) REFERENCES ingredients(id), recipe_img (filePath?), FOREIGN KEY (user_id) REFERENCES user(id);";
    db.run(sqlRecipe, (err: { message: any; }) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'recipes' table");
    });
  }
});
export default db;
