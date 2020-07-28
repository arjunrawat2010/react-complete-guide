import React, { Component } from 'react'; 
import './App.css';
import Person from "./Person/Person"
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello I am react developer</h1>
        <p>This isreally working</p>
        <Person />
      </div>
    );

  // return React.createElement("div",{className:'App'},
  // React.createElement("h1",null,"Something changed"));
  }
}

export default App;
