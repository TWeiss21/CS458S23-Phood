/** 
 * RecipeDetailsImage component for aligning and encapsulating images for recipes
 * 
 * props.Image provides access to the image passed to the component.
 * Use Image = {'the image'} when passing the image into the component
 * 
 * TODO: if no available image use stock, or don't show entirely, have not decided
*/
const RecipeImage = (props) => {
    return(
    <div className='imageGrid'>
        <div className='image' id='image'></div>
        {/* <Image className='image' src={ChickenNug} alt='Chicken Nugs'/> */}
    </div>
    )
}

export default RecipeImage