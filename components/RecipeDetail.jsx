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
            <div className="recipeListLine recipeDetailLineHeader" id="recipeDetailLineHeader"></div>
          </h1>
          <div className='descGrid'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
          {/* <div className="ingred"> */}
            <div className='ingredGrid'>
              <div className='ingredientLayout'>
                <div className="ingredsec sec1"><div>sec1 full text aaa</div><div>sec1 full text aaa</div><div>sec1 full text aaa</div><div>sec1 full text aaa</div><div>sec1 full text aaa</div></div>
                <div className="ingredsec sec2"><div>sec2 full text aaa</div><div>sec2</div><div>sec2</div><div>sec2</div><div>sec2</div></div>
                <div className="ingredsec sec3"><div>sec3</div><div>sec3</div><div>sec3</div><div>sec3</div></div>
              </div>
            </div>
          {/* </div> */}
          <div className='stepGrid'>
          <div className="recipeListLine recipeDetailLineSteps" id="recipeDetailLineSteps"></div>
            <div className="step">1)  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
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