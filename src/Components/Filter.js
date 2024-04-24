import React from 'react'
import TaskManagerContext from '../Contexts/TaskManagerContext';

const Filter = () => {
    const { setFilter } = React.useContext(TaskManagerContext);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };
    return (
        <div className="">
            <select className='bg-neutral-300 px-3 py-2 rounded-md shadow-sm text-md' onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}

export default Filter