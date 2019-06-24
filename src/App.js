import React, { Component } from 'react';
import Form from './components/Form'
import Recipes from './components/Recipes'
import './App.css';
require('dotenv').config();

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = '97f1948f1faca2bffb5bd14a0b3d1a74';
class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    console.log(process.env);
    const res = await req.json(); // result
    this.setState({ recipes: res.recipes });

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Resippy</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    )
  }

}

export default App;
