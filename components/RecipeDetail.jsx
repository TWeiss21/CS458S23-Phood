import React from 'react'
import Image from 'next/Image'
import ChickenNug from '../Images/ChickenNugs.jpg'


const RecipeDetail = () =>{
  return(
    <React.Fragment>
      <div className="recipeDetailContainer">
        <div className="recipeDetailLayout">
          <div className='imageGrid'>
            <div className='image'>image</div>
            {/*<Image className='image' src={ChickenNug} alt='Chicken Nugs'/>{/*Make image scale */}
          </div>
          <h1 className='nameGrid'>name
          <div className="recipeListLine recipeDetailLine" id="recipeDetailLine"></div></h1>
          <div className='descGrid'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
          {/* <div className="ingred"> */}
            <div className='ingredGrid'>
              <div className='ingredientLayout'>
                <div className="ingredsec sec1">sec1 full text aaa</div>
                <div className="ingredsec sec2"><div>sec2 full text aaa</div><div>sec2</div><div>sec2</div><div>sec2</div><div>sec2</div></div>
                <div className="ingredsec sec3">sec3</div>
              </div>
            </div>
          {/* </div> */}
          <div className='stepGrid'>
            <div>steps</div>
            <div>steps</div>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default RecipeDetail