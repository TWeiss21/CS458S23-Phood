import React from 'react'

const ShoppingList = () =>{
  return(
  <div className="shopGrid">
    <div className="shopList">
      <div className="shopHeader">Shopping List</div>
      <div className="shopListContainer">
        <div className="ingredItem">
          <div className="verticalCentered">
            <div className="ingredName">Chick</div>
            <div className="qtyContainer">
              <button className="incDecQty">+</button>
              <p className="numQty centered">10</p>
              <button className="incDecQty">&minus;</button>
            </div>
            <button className="remove">x</button>
          </div>
        </div>
      </div>
    </div>
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