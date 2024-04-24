import React, { useState, useContext } from 'react'
import TaskList from './TaskList'
import TaskContext from '../Contexts/TaskManagerContext';
import AddTaskPopup from './AddTaskPopup';
import Filter from './Filter';

const TaskContainer = () => {
    const [isAddTaskPopupOpen, setIsAddTaskPopupOpen] = useState(false);

    const { addTask } = useContext(TaskContext);

    const handleTogglePopup = () => {
        setIsAddTaskPopupOpen(!isAddTaskPopupOpen);
    }

    const handleAddTaskSubmit = (newTask) => {
        setIsAddTaskPopupOpen(false);
        addTask(newTask);
    }

    return (
        <div className='w-[90%] lg:w-[50%] mx-auto mt-14'>
            <div className='flex justify-between w-full font-semibold text-neutral-600 text-md'>
                {/* Add task */}
                <button className='bg-[#6270ed] px-5 py-2 rounded-md shadow-sm text-white' onClick={handleTogglePopup}>Add Task</button>
                {/* Filter */}
                <Filter />

            </div>
            <TaskList />
            {isAddTaskPopupOpen && (
                <AddTaskPopup onClose={handleTogglePopup} onSubmit={handleAddTaskSubmit} />
            )}
        </div>
    )
}

export default TaskContainer