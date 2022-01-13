import React, { useState } from 'react';

const AddToDo = ({ addItem }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addItem(value);
        setValue('');
    }

    return (
        <div className='add-to-do-form-container'>
            <form onSubmit={handleSubmit} >
                <input
                    type='text'
                    className='add-to-do-input'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder='Add an item to your to do list'
                />
                <input
                    type='submit'
                />
            </form>
        </div>
    )
}

export default AddToDo;
