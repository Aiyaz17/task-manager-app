import React, { useState } from 'react';

const AddTaskPopup = ({ onClose, onSubmit, oldTask }) => {
  const [newTask, setNewTask] = useState(oldTask ? oldTask : '');
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      onSubmit(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-4 shadow-md w-[80%] lg:w-[40%]">
        <h3 className="text-xl font-bold text-neutral-500 mb-4">{oldTask ? "Edit Task" : "Add Task"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex items-start  sm:items-center flex-col sm:flex-row">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task here"
              value={newTask}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="sm:ml-3 mt-3 sm:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-2 focus:outline-none"
            >
              {oldTask ? "Edit" : "Add"}
            </button>
          </div>
        </form>
        <button
          type="button"
          className="mt-4 text-blue-500 hover:underline focus:outline-none"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTaskPopup;
