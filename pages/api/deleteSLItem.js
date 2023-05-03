import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


export default async function deleteSLItemByID(req, res){
    const { id } = req.body

    console.log("The id: "+ id)

    let query = `DELETE FROM shoppingList WHERE id = ${id}`
    // is the id in the reqest body?
    if(!id){
        return res.status(400).json({error: 'id is required and missing from request body'})
    }
    try {
    const db = await open(
        {
            filename: './sqlitedb/phooddb.sqlite',
            driver: sqlite3.Database,
        })

         //running the delete query
         await db.run(query)

         //close the database
         await db.close()
 
         res.status(200).json({success:true})
        } 
        catch(err){
            console.error(err)
            res.status(500).json({error: 'unable to delete this item from SL'})
        }
}