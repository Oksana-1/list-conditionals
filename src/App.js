import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import './ValidationComponent/ValidationComponent.css';
import CharComponent from './CharComponent/CharComponent';
import './CharComponent/CharComponent.css';

class App extends Component {
  state = {
    inputValue: '',
    inputLength: 0,
  };
  changedInputHandler = (event) => {
    this.setState({
      inputValue: event.target.value,
      inputLength: event.target.value.length
    })
  };
  deleteCharHandler = (event, charIndex) => {
    const chartsArray = this.state.inputValue.split('');
    chartsArray.splice(charIndex, 1)
    const chartsString = chartsArray.join('');
    this.setState({
      inputValue: chartsString,
      inputLength: chartsString.length
    })
  }
  render() {
    const chars = (
      <div className="chars-wrap">{
        this.state.inputValue.split('').map((char, index) => {
          return <CharComponent
            key={index}
            charSymbol={char}
            deleteMe={(event) => this.deleteCharHandler(event, index)}
          />
        })
      }
      </div>
    );
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div className="container">
          <input type="text"
                 className={this.state.inputLength < 5 ? 'error': ''}
                 value={this.state.inputValue}
                 onChange={this.changedInputHandler}/>
          <ValidationComponent textLength={this.state.inputLength}/>
          <p className="title">Chars you entered:</p>
          {chars}
        </div>
      </div>
    );
  }
}

export default App;
