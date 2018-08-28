import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Dan", age: 77},
      {name: "Mart", age: 55}
    ]
  }

  switchNameHandler = (newName) => {

    this.setState({persons: [
      {name: newName, age: 88},
      {name: "Dan", age: 77},
      {name: "Mart", age: 855555}
    ]})
  }

nameChangedHandler = (event) => {
  this.setState({persons: [
    {name: "Max", age: 88},
    {name: event.target.value, age: 77},
    {name: "Mart", age: 855555}
  ]})
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  // splice(index, howmany to remove)
  this.setState({persons: persons})

}

  render() {

    const style = {
      color: "red",
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state){
      persons= (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={index} click ={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} />
          })}

        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app </h1>
        <p> this is working! </p>
        <button style={style}
         onClick={() => this.switchNameHandler("Maxwellers")}> Switch Name </button>
        {persons}
      </div>
    );
  }
}

export default App;
