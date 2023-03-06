// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//api endponits  - for getting data from the server side to the client side

//get all recipies from the server side. from the dB

let recipes = {recipe_name: 'test recipe', id: '0'}

//API ENDpoint for those recipies
export default function AllRecipes(req, res) {

  // const { pid } = req.query
  // res.end(`Post: ${pid}`)

  if(req.method === 'GET'){
    res.status(200).json(recipes)
  }
  else if( req.method === 'POST' ){
    //posting data to the database
  }
}
