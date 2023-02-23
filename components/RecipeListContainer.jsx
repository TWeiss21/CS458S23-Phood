import React, { Component } from 'react'
import lists from '../mocks/Recipes.js'


class GetRecipeLists extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists :lists
        };
    }

    render() {
        const {lists} = this.state;
        return(
            <div>
                <ol className="item">
                    {
                        lists.map(list => (
                            <li key={list.id} align="start">
                                <div>
                                    <p className="title">{list.recipe_name}</p>
                                    <p className="body">{list.Description}</p>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }


//     componentDidMount() {
//     // I will use a fake api from jsonplaceholder website
//     // this will return 100 items
//     fetch("Recipes.json")
//     .then( response => response.json())
//     .then(
//         // handle the result
//         (result) => {
//             this.setState({
//                 isLoaded : true,
//                 lists : result
//             });
//         },

//         // Handle error
//         (error) => {
//             this.setState({
//                 isLoaded: true,
//                 error
//             })
//         },
//     )
// }

//     render() {
//     const {error, isLoaded, lists} = this.state;

//     if(error){
//         return <div>Error in loading</div>
//     }else if (!isLoaded) {
//         return <div>Loading ...</div>
//     }else{
//         return(
//             <div>
//                 <ol>
//                     {
//                         lists.map(list => (
//                             <li key={list.id} align="start">
//                                 <div>
//                                     <p>{list.recipe_name}</p>
//                                     <p>{list.Description}</p>
//                                 </div>
//                             </li>
//                         ))
//                     }
//                 </ol>
//             </div>
//         );
//     }
// }
// {/* function RecipeContainer() {
//     return (
//         <div className="RecipeContainer">
//             <br /><br />

//             {
//                 recipies.map( record => {
//                     return(
//                         <div className="box" key={ record.id }>
//                             { record.recipe_name }
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// } */}
}

export default GetRecipeLists;