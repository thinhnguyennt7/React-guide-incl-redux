import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Thinh', age: 21 },
            { name: 'Nguyen', age: 22 },
            { name: 'test', age: 30 }
        ],
        otherStates: 'testing'
    }

    // Handling event
    switchNameHandler = () => {
        // Override state properties known as Manipulating the state
        this.setState({});
    }

  render() {
    return (
        // Here is the JSX
        // JSX must has one root element
        // Use this because it is current in App class
		<div className="App">
			<h1> Hi, Im  a React App</h1>
			<button onClick={ this.switchNameHandler }>Switch Name</button>
            <Person 
                name={ this.state.persons[0].name }
                age={ this.state.persons[0].age }
                // Parsing between method and componnent 
                click={this.switchNameHandler}> My favorite: Soccer</Person>
            <Person 
                name={ this.state.persons[1].name }
                age={ this.state.persons[1].age } />
            <Person 
                name={ this.state.persons[2].name }
                age={ this.state.persons[2 ].age } />
      	</div>
    );

    // This code will produce the same output
    // return React.createElement('div', null, 'h1', 'Hi, Im a React App!!!');
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Do it work now?'));
    // React.createElement('element such as div h1', {configure}, Value)
  }
}

export default App;
