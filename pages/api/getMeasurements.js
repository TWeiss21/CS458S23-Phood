import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

/**
 * Data API endoint for getting all recipes from the DB
 * getAllRecipes will return
 */
export default async function getAllRecipes(req,res){
    const db = await open(
        {
            filename: './sqlitedb/phooddb.sqlite',
            driver: sqlite3.Database,
        })

        //get the recipe info
        const recipes = await db.all("SELECT * FROM measurements")

        //close the database
        await db.close()

        res.status(200).json(recipes)
}