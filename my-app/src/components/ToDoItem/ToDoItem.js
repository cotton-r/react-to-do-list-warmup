import React from 'react';

const ToDoItem = ({ key, index, todo }) => {
    return (
        <div className='to-do-item-container'>
            {todo.text}
        </div>
    )
}

export default ToDoItem;
