import React from 'react'

const ShoppingList = () =>{
  return(
  <div className="shopGrid">
    <div className="shopList">
      <div className="shopHeader">Shopping List</div>
      <div className="shopListContainer">
        <div className="ingredItem">
          <div className="verticalCentered">
            <div className="ingredName" id="ingredName">Chicken</div>
            <div className="qtyContainer">
              <button className="incDecQty" id="incQty">&minus;</button>
              <p className="numQty centered" id="numQty">10</p>
              <button className="incDecQty" id="decQty">+</button>
            </div>
            <button className="remove" id="remove">x</button>
          </div>
        </div>
        <div className="ingredItem">
          <div className="verticalCentered">
            <div className="ingredName" id="ingredName">Eggs</div>
            <div className="qtyContainer">
              <button className="incDecQty" id="incQty">&minus;</button>
              <p className="numQty centered" id="numQty">10000</p>
              <button className="incDecQty" id="decQty">+</button>
            </div>
            <button className="remove" id="remove">x</button>
          </div>
        </div>
        <div className="ingredItem">
          <div className="verticalCentered">
            <div className="ingredName" id="ingredName">Butter</div>
            <div className="qtyContainer">
              <button className="incDecQty" id="incQty">&minus;</button>
              <p className="numQty centered" id="numQty">10</p>
              <button className="incDecQty" id="decQty">+</button>
            </div>
            <button className="remove" id="remove">x</button>
          </div>
        </div>
        <div className="ingredItem">
          <div className="verticalCentered">
            <div className="ingredName" id="ingredName">Carrots</div>
            <div className="qtyContainer">
              <button className="incDecQty" id="incQty">&minus;</button>
              <p className="numQty centered" id="numQty">10</p>
              <button className="incDecQty" id="decQty">+</button>
            </div>
            <button className="remove" id="remove">x</button>
          </div>
        </div>
        <div className="ingredItem">
          <div className="verticalCentered">
            <div className="ingredName" id="ingredName">Pork</div>
            <div className="qtyContainer">
              <button className="incDecQty" id="incQty">&minus;</button>
              <p className="numQty centered" id="numQty">10</p>
              <button className="incDecQty" id="decQty">+</button>
            </div>
            <button className="remove" id="remove">x</button>
          </div>
        </div>
        <div className="ingredItem">
          <div className="verticalCentered">
            <div className="ingredName" id="ingredName">Beef</div>
            <div className="qtyContainer">
              <button className="incDecQty" id="incQty">&minus;</button>
              <p className="numQty centered" id="numQty">10</p>
              <button className="incDecQty" id="decQty">+</button>
            </div>
            <button className="remove" id="remove">x</button>
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