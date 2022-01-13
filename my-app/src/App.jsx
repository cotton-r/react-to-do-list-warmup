import React, { useState } from 'react';

import './App.css';

import Tabs from '../src/components/Tabs/Tabs';
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {

  const [todos, setTodos] = useState([
    { text: "Learn React" },
    { text: "Prepare for job interview" },
    { text: "Get ready for football training" }
  ]);

  const addItem = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };


  return (
    <div className='wrapper'>
      <Tabs />
      <ToDoList todos={todos} addItem={addItem} />
    </div>
  );
}

export default App;
