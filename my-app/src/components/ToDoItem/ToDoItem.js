import React from 'react';

const ToDoItem = ({ key, index, todo, completeTodo }) => {
    return (
        <div className='to-do-item-container'>
            {todo.text}
            <button onClick={() => completeTodo(index)}>Complete</button>
        </div>
    )
}

export default ToDoItem;
