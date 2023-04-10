import React from 'react'
// import Image from 'next/Image'
// import ChickenNug from '../Images/ChickenNugs.jpg'


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
          <h1 className='nameGrid' id="nameGrid">{props.RecipeData}
            <div className="recipeListLine recipeDetailLineHeader" id="recipeDetailLineHeader"></div>
          </h1>
          <div className='descGrid' id='descGrid'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
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
              <div className="step">1) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
              <div className="step">2) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
              <div className="step">3) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
              <div className="step">4) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
              <div className="step">5) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
              <div className="step">6) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
              <div className="step">7) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default RecipeDetail