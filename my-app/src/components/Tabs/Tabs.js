import React from 'react';

import '../Tabs/Tabs.css';

const Tabs = () => {
    return (
        <div className='tabs-container'>
            <button className='tab-button' id='to-do-list-button'>To Do List</button>
            <button className='tab-button'id='completed-list-button'>Completed Items</button>
        </div>
    )
}

export default Tabs;
