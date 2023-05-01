import React from 'react'
import ExportToCSV from './ExportToCSV'
import EcportButton from './ExportButton'
// export const getServerSideProps = async () => {

//   // Fetch will server side render from the http endpoint added
//   const res = await fetch('http://localhost:3000/api/getIngredents')
//   const data = await res.json()
//   console.log(data)
//   return {
//       props: { recipes: data}
//   }
// }

const ShoppingList = (props) =>{
  return(
  <div className="shopGrid">

    {/* The shopping list blockOut starts here */}
    <div className="shopList">
      <div className="shopHeader">Shopping List</div>
      <div className="shopListContainer">

        {/* This is the first ingredient item. TODO: make an ingredient components so we don't have to look at 100 lines of html */}
        { console.log(props.listOfIngredients)}

        {
          (props.listOfIngredients || []).map(list=>(
            <div key={list.name} className="ingredItem">
        <div className="verticalCentered">
          <div className="ingredName" id="ingredName">{list.name}</div>
          <div className="qtyContainer">
            <button className="incDecQty" id="incQty">&minus;</button>
            <p className="numQty centered" id="numQty">10</p>
            <button className="incDecQty" id="decQty">+</button>
          </div>
          <button className="remove" id="remove">x</button>
        </div>
      </div>
          ))
        }
                    
        


        {/* Above is the last div of the last ingredient Item */}

        {/* Below is the end of each element of the shopping list block out */}
      </div>
    </div>
    {/* Shopping list block out ends with the above dive */}

    {/* These are the buttons Clear, Undo, Export from the top down */}
    <div className="shopBtns">
      <div className="verticalCentered">
        <div className="btnSpace centered"><button className="generalBtn shopInteractiveBtns">Clear</button></div>
        <div className="btnSpace centered"><button className="generalBtn shopInteractiveBtns">Undo</button></div>
        {/* <div className="btnSpace centered"><button className="generalBtn shopInteractiveBtns" onClick={ExportToCSV.download}>Export</button></div> */}
        <ExportButton  onClick={ExportToCSV.download}/>
      </div>
    </div>
    {/* TODO: 
    1. create modal/or button that pops up when clicking the "Export button"
    2. write logic for csv download in the modal created
    3. test logic with npm run dev and localhost:3000 */}
  </div>
  )
}

export default ShoppingList