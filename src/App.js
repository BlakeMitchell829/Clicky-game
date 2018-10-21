import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0,
    currentGame: 1,
    highScore: 0
  };

  shuffle = () => {
    console.log("Shuffling...");
    const characters = this.state.characters;
    for (var i = 0; i < characters.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (characters.length - i));
      var temp = characters[j];
      characters[j] = characters[i];
      characters[i] = temp;
    }

    this.setState({ characters });
  };

  changeScore = () => {
    console.log("score :", this.state.score);
    this.setState({ score: this.state.score + 1 });
  };

  endGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score});
    }
    this.setState({ score: 0 });
    this.setState({currentGame: this.state.currentGame + 1})  
    this.forceUpdate();
  }

  render() {
    return (
      <Wrapper>
      <Title 
      highScore={this.state.highScore}
      score={this.state.score} 
      />
        {this.state.characters.map(character => (
        <CharacterCard
          ref={instance => { this.characterCard = instance; }}
          endGame={this.endGame}
          changeScore={this.changeScore}
          shuffle={this.shuffle}
          score={this.state.score}
          currentGame={this.state.currentGame}          
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
      </Wrapper>
    );
  }
}


