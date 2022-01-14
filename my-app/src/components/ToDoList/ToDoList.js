import React from 'react';

import AddToDo from '../AddToDo/AddToDo';
import ToDoItem from '../ToDoItem/ToDoItem';

import './ToDoList.css';

const ToDoList = ({ todos, addItem }) => {
    
    return (
        <div className='to-do-list-container'>
            <AddToDo addItem={addItem} />
            <div className='to-do-list'>
                {
                    todos.map((todo, index) => (
                        <ToDoItem 
                            key={index}
                            index={index}
                            todo={todo}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ToDoList;
