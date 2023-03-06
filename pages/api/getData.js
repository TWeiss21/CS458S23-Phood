import { data } from '../../sqlitedb/getAllRecipes'
// const data = require('../../sqlitedb/getAllRecipes')
// const useable = data
//console.log(useable)

console.log(data)

// const Json = JSON.stringify(useable)
// console.log('teh data;' + useable)

export default async function handler(req, res){
res.status(200).json(data)
}