import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   characters: [],
  //   // }
  // }
  state = {
    characters: [],
  }

   fetchCharacters = async () => {
    await fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({ characters: data.results })
      console.log(data.results)
    })
  }

  componentDidMount() {
    // fetch('https://rickandmortyapi.com/api/character')
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({ characters: data.results })
    //   console.log(data.results)
    // })
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Rick and Morty Characters:</h1>
        <div className="body">
          {characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{ character.name }</h3>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
