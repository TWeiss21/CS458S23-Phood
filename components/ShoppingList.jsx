import React from 'react'

const ShoppingList = (props) =>{
  return(
  <div className="shopGrid">

    {/* The shopping list blockOut starts here */}
    <div className="shopList">
      <div className="shopHeader">Shopping List</div>
      <div className="shopListContainer">

        {/* Map each item in list of ingredients to this div accordian representing a single ingredent */}

        {
          (props.listOfIngredients || []).map(list=>(
            <div key={list.id} className="ingredItem">
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
        <div className="btnSpace centered"><button className="generalBtn shopInteractiveBtns">Export</button></div>
      </div>
    </div>
    
  </div>
  )
}

export default ShoppingList