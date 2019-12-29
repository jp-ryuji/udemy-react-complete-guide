import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

// NOTE: 使っているreact-scriptsのバージョンでは、appが使えないためAppにした。2019/12/30時点で最新バージョン（3.3.0）。
const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ]
    })
  }

  // NOTE: これには制限がある。CSSで出来ることを全て出来るわけではない。
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={() => switchNameHandler('Maximilian')}>Switch Name</button> {/* 効率は良くないためおすすめは出来ない */}
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler.bind(this, 'Max!!!')} changed={nameChangedHandler}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  )
}

export default App;