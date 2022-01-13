import React from 'react';

import AddToDo from '../AddToDo/AddToDo';

import './ToDoList.css';

const ToDoList = ({ todos, addItem }) => {
    
    return (
        <div className='to-do-list-container'>
            <AddToDo addItem={addItem} />
            <div className='to-do-list'>
                {
                    todos.map((todo) => (
                        <div className='to-do-item'>
                            {todo.text}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ToDoList;
