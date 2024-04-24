import React, { useState } from "react";
import Header from "./Components/Header";
import TaskContainer from "./Components/TaskContainer";
import TaskManagerContext from "./Contexts/TaskManagerContext";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [backupTasks, setBackupTasks] = useState(tasks);

  const generateTaskId = () => {
    return `task-${Math.random().toString(36).substring(2, 15)}-${Date.now()}`;
  };

  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
  };

  const syncTasks = (tasks) => {
    setTasks(tasks);
    setBackupTasks(tasks);
  };

  const addTask = (newTaskLabel) => {
    const newTask = {
      id: generateTaskId(),
      label: newTaskLabel,
      completed: false,
    };
    const updatedTasks = [newTask, ...tasks];
    syncTasks(updatedTasks);
    sortTasks(updatedTasks);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    syncTasks(updatedTasks);
    sortTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    syncTasks(updatedTasks);
    sortTasks(updatedTasks);
  };

  const handleFilterChange = (newFilter) => {

    if (newFilter === "all") {
      setTasks(backupTasks);
      return;
    }
    const updatedTasks = backupTasks.filter((task) => {
      if (newFilter === "active") {
        return !task.completed;
      }
      if (newFilter === "completed") {
        return task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const value = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    setFilter: handleFilterChange,
  };

  return <TaskManagerContext.Provider value={value}  >
    <Header />
    <TaskContainer />
  </TaskManagerContext.Provider>;
};

export default App;
