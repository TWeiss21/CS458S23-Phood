//How to access specific part of spoonacular JSON, response.recipes[0].thingtograb

//Get request from spoonacular API, gets a random recipe from their recipe

function convertToPhoodJSON() {

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./sqlitedb/phooddb.sqlite');


	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c94ed2596msh2be5d7b9ffa20dcp1162dcjsn9f230731f0ae',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

 fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1', options)
	.then(response => response.json())
	.then(response => {
		db.run('INSERT INTO recipes (id, userId, name, description, steps) VALUES (?, ?, ?, ?, ?)',
		this.lastID,
		1,
		response.recipes[0].title,
		response.recipes[0].summary,
		response.recipes[0].instructions
	)})
	.catch(err => console.error(err))
}

convertToPhoodJSON()