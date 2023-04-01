// import { myFunc } from '../../sqlitedb/getAllRecipes'
import data from '../../sqlitedb/getAllRecipes'




export default async function handler(req, res){
    res.status(200).json(data)
}

