import React, { Component ,useState} from 'react'; 
import './App.css';
import Person from "./Person/Person"
const app = props => {

  const [personState,setPersonState] = useState({
    persons:[
      {"name":"Arjun",age:23},
      {"name":"Vikas",age:24},
      {"name":"Ramji",age:25}
    ],
  })
  const [otherState,setOtherState] = useState("other state"); 

  const switchNameHandler=()=>{
    setPersonState({
      persons:[
        {"name":"Arjun Singh",age:23},
        {"name":"Vikas",age:24},
        {"name":"Ramji",age:22}
      ]
    })
  }
   
    return (
      <div className="App">
        <h1>Hello I am react developer</h1>
        <p>This isreally working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} > His hobey is cricket</Person>
        <Person name={personState.persons[2].name} age={personState.persons[0].age} />
      </div>
    );

  // return React.createElement("div",{className:'App'},
  // React.createElement("h1",null,"Something changed"));
  
}

export default app;
