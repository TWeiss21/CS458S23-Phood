import React from 'react'
import Image from 'next/legacy/Image'
import ChickenNug from '../Images/ChickenNugs.jpg'


const RecipeDetail = () =>{
  return(
    <React.Fragment>
      <div className="recipeDetailContainer">
        <div className="recipeDetailLayout">
          <div className='imageGrid'>
            <Image src={ChickenNug} alt='Chicken Nugs' objectFit="contain"/>{/*Make image scale */}
          </div>
          <h1 className='nameGrid'>name
          <div className="recipeListLine" id="recipeDetailLine"></div></h1>
          <div className='descGrid'>text</div>
          <div className='ingredGrid'>ingred</div>
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