import React, { useContext, useState } from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import TaskContext from '../Contexts/TaskManagerContext';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    return (
        <div className='mt-5 flex flex-col gap-y-5 bg-[#ecedf6] p-5 rounded-xl'>
            {tasks.length === 0 ? <p className='text-neutral-600 font-sm'>No tasks</p> : tasks.map((task, id) => (
                <Task task={{ ...task }} key={id} />
            ))}
        </div>
    )
}

export default TaskList

const Task = ({ task }) => {
    const { updateTask, deleteTask } = useContext(TaskContext);
    const [isEditTaskPopupOpen, setIsEditTaskPopupOpen] = useState(false);

    const handleCheckboxChange = (e) => {
        updateTask({ ...task, completed: !task.completed });
    };

    const handleDelete = () => {
        deleteTask(task.id);
    };

    const handleTogglePopup = () => {
        setIsEditTaskPopupOpen(!isEditTaskPopupOpen);
    }

    const handleEditTaskSubmit = (updatedTaskLabel) => {
        setIsEditTaskPopupOpen(false);
        updateTask({ ...task, label: updatedTaskLabel });
    };

    return (
        <div className='flex justify-between items-center bg-white rounded-md h-14 p-2 gap-x-2'>
            <div className="flex items-center h-5 select-none">
                <input checked={task.completed} onChange={handleCheckboxChange} id={task.id} type="checkbox" className="w-5 h-5 checked:bg-[#6270ed] rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-white" />
                <label for={task.id} className={`ml-3 text-md font-medium text-neutral-600 line-clamp-1	 ${task.completed && "line-through"}`}>{task.label}</label>
            </div>
            <div className='flex gap-x-3'>
                <p className='icons' onClick={handleDelete}><MdDelete size={22} /></p>
                <p className='icons' onClick={handleTogglePopup}><MdEdit size={22} /></p>
            </div>
        </div>
    )
}