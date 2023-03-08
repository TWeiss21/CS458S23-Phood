// import { myFunc } from '../../sqlitedb/getAllRecipes'
 import data from '../../sqlitedb/getAllRecipes'

// myFunc('../../sqlitedb/phooddb.sqlite', () =>{
//     console.log('function complete')
// })


export default async function handler(req, res){
    res.status(200).json(data)
}


// const Json = JSON.stringify(useable)
// console.log('teh data;' + useable)


// export default async function handler(req, res){
//   myFunc(function(err, content){
//     if(err) throw(err)
//     ExtData = content
//     console.log('the stuff')
//     console.log('stuff', ExtData)
//     res.status(200).json(ExtData)
//   })

// }