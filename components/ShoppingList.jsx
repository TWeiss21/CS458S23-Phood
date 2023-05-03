import React from 'react'
import WarnMode from './WarnMode'

const ShoppingList = (props) =>{

  /** 
   * clearAllIngs will map through props.listOfIngredients deleting each item based on thir id on the Clear button onClick event
   * no inputs, deletes table.
  */
  function clearAllSL(){
    
    props.listOfIngredients.map(list=>{
      console.log(list)
      
      fetch('http://localhost:3000/api/deleteSLItem',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({id:list.id})
    })
      // TODO: 
      //1. Try using only one fetch insted of fetch for each item. -Dedicate separate endpoint to clear the table.
      //2. How could we secure that endpoint?
      //3. Warning Model could use a touch up.
      //4. Refresh should be automatic.
      //5. Ids in db keep counting up instead of resetting upon clear. mildly annoying.
      // if an item already exists in the shopping list, it should not be added in duplicate in the first place.
    })
  }
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
        {/* <div className="btnSpace centered"><button className="generalBtn shopInteractiveBtns" onClick={clearAllIngs}>Clear</button></div> */}
        <WarnMode 
        name="Clear" 
        message="This action will remove all items from the shopping list. Will you continue?"
        affirmitiveAction = "Continue"
        negativeAction = "Cancel" 
        functionWarnedAgainst = {clearAllSL}/>
        <div className="btnSpace centered"><button className="generalBtn shopInteractiveBtns">Undo</button></div>
        <div className="btnSpace centered"><button className="generalBtn shopInteractiveBtns">Export</button></div>
      </div>
    </div>
    
  </div>
  )
}

export default ShoppingList