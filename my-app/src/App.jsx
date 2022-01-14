import React, { useState } from 'react';

import './App.css';

import Tabs from '../src/components/Tabs/Tabs';
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {

  const [todos, setTodos] = useState([
    { 
      text: "Learn React",
      isCompleted: false
    },
    { 
      text: "Prepare for job interview",
      isCompleted: false
    },
    { 
      text: "Get ready for football training",
      isCompleted: false
    }
  ]);

  const addItem = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };


  return (
    <div className='wrapper'>
      <Tabs />
      <ToDoList todos={todos} addItem={addItem} completeTodo={completeTodo} />
    </div>
  );
}

export default App;
