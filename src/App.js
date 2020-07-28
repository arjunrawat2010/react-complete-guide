import React, { Component } from 'react'; 
import './App.css';
import Person from "./Person/Person"
class App extends Component {
  state={
    persons:[
      {"name":"Arjun",age:23},
      {"name":"Vikas",age:24},
      {"name":"Ramji",age:25}
    ],
    otherState:"other state"
  }
  switchNameHandler=(newName)=>{
    this.setState({
      persons:[
        {"name":newName,age:23},
        {"name":"Vikas",age:24},
        {"name":"Ramji",age:22}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello I am react developer</h1>
        <p>This isreally working</p>
        <button onClick={()=>this.switchNameHandler("vikas!!")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.switchNameHandler.bind(this,"vik")} name={this.state.persons[1].name} age={this.state.persons[1].age} > His hobey is cricket</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age} />
      </div>
    );

  // return React.createElement("div",{className:'App'},
  // React.createElement("h1",null,"Something changed"));
  }
}

export default App;
