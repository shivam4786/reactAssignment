import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidatonCompnent';
import CharCompo from './CharComponent/CharComponent';

class App extends Component {

  constructor(){
    super();
    this.state = {
      text: '',
      textLength: 0
    }
    this.outputLength = this.outputLength.bind(this);
  }

  outputLength = (e) => {
    this.setState({
      text: e.target.value,
      // textLength : text.length
    });
  }

  removeCharComp = (index) => {
    console.log(index);
    let newText = [...this.state.text];
    newText.splice(index, 1);

    let updatedText = newText.join('');

    console.log(updatedText);

    this.setState({
      text: updatedText
    });

  }

  render() {
    
    let charList = this.state.text.split('').map((char,index) => {
      return <CharCompo 
                character={char} 
                key={index}
                removeCharComp={() => this.removeCharComp(index)}
              />
    });

    return (
      <div className="App">
        <input 
          type='text' 
          value={this.state.text}
          onChange={this.outputLength.bind(this)}
        /> 
        <p>{this.state.textLength}</p>  
        <Validation length={this.state.textLength}></Validation>  
        {charList}
      </div>
    );
  }
}

export default App;
