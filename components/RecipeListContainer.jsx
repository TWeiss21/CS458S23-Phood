import React, { Component } from 'react'
import lists from '../mocks/Recipes.js'


//Will proceed to render the text of the passed in mock data from Recipes.js
export class GetRecipeNames extends Component {
    //Pass in the data from lists as props
    constructor(props){
        super(props);
        this.state = {
            lists :lists
        };
    }

    //Will go through and render each of the segments of the json data's recipe name
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
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }
}

export class GetRecipeDescriptions extends Component {

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
                <ol className="desc">
                    {
                        lists.map(list => (
                            <li key={list.id} align="start">
                                <div>
                                    <p className="title">{list.Description}</p>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }
}