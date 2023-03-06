import data from '../../sqlitedb/getAllRecipes'

const useable = data
//console.log(useable)

const Json = JSON.stringify(useable)
console.log(useable)

export default async function handler(req, res){

//res.status(200).json({name:'john ode'})
// res.status(200).json(useable)
res.status(200).json(useable)
}