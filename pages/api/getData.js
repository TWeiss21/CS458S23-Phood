import data from '../../sqlitedb/getAllRecipes'

export default async function handler(req, res){
    // console.log("data from getData " + data)
    res.status(200).json(data)
}

