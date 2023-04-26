import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { getURL } from 'next/dist/shared/lib/utils';

/**
 * Data API endoint for getting all recipes from the DB
 * getAllRecipes will return
 */
export default async function getAllRecipes(req,res,id){
    let url = req.url;
    id = url.substring(url.lastIndexOf('=') + 1);
    //console.log(id);

    let query = `SELECT ingredients.* FROM ingredientsForRecipes 
    JOIN ingredients ON ingredients.id=ingredientsForRecipes.ingredientId 
    JOIN recipes ON recipes.id=ingredientsForRecipes.recipeId WHERE recipes.id= ${id}`;
    
    const db = await open(
        {
            filename: './sqlitedb/phooddb.sqlite',
            driver: sqlite3.Database,
        })

        //get the recipe info
        const recipes = await db.all(query)

        //close the database
        await db.close()

        res.status(200).json(recipes)
}