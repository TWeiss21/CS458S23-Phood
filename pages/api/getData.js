import { myFunc } from '../../sqlitedb/getAllRecipes'

// const Json = JSON.stringify(useable)
// console.log('teh data;' + useable)

export default async function handler(req, res){
  myFunc(function(err, content){
    if(err) throw(err)
    ExtData = content
    console.log('the stuff')
    console.log('stuff', ExtData)
    res.status(200).json(ExtData)
  })

}