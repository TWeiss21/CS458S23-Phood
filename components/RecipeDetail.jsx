import React from 'react'
//import Image from 'next/Image'
// import ChickenNug from '../Images/ChickenNugs.jpg'
import Nugget from "./TheNugget.jsx"


const RecipeDetail = (props) =>{
  // console.log(props.data)
  // let DataArray = props.data
  // console.log(DataArray.findIndex(0))
  // console.log("The data in props of RecipeDetail")
  // console.log(props.id)
  return(
    <React.Fragment>
      <div className="recipeDetailContainer">
        <div className="btnHolder">
          <button className="generalBtn recipeBtn" id="recipeBtn">Add to List</button>
          <div className="rightAlign">
            <button className="generalBtn recipeBtn recipeDeleteBtn" id="recipeDeleteBtn">Delete</button>
            <button className="generalBtn recipeBtn recipeEditBtn" id="recipeEditBtn">Edit</button>
          </div>
        </div>
        <div className="recipeDetailLayout">
          <div className='imageGrid'>
            <div className='image' id='image'></div>
            {/* <Image className='image' src={ChickenNug} alt='Chicken Nugs'/> */}
          </div>
          <h1 className='nameGrid' id="nameGrid">{props.RecipeData[0]}
            <div className="recipeListLine recipeDetailLineHeader" id="recipeDetailLineHeader"></div>
          </h1>
          <div className='descGrid' id='descGrid'>{props.RecipeData[1]}</div>
            <div className='ingredGrid' id="ingredGrid">
              <div className='ingredientLayout' id='ingredientLayout'>
                <div className="ingredsec sec1" id='sec1'><div>sec1 full text aaa</div><div>sec1 full text aaa</div><div>sec1 full text aaa</div><div>sec1 full text aaa</div><div>sec1 full text aaa</div></div>
                <div className="ingredsec sec2" id='sec2'><div>sec2 full text aaa</div><div>sec2</div><div>sec2</div><div>sec2</div><div>sec2</div></div>
                <div className="ingredsec sec3" id='sec3'><div>sec3</div><div>sec3</div><div>sec3</div><div>sec3</div></div>
              </div>
            </div>
          {/* </div> */}
          <div className='stepGrid'>
            <div className="recipeListLine recipeDetailLineSteps" id="recipeDetailLineSteps"></div>
              <div className="step">{props.RecipeData[2]}</div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default RecipeDetail