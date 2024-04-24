import React, { useState } from "react";
import Header from "./Components/Header";
import TaskContainer from "./Components/TaskContainer";
import TaskManagerContext from "./Contexts/TaskManagerContext";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const addTask = (newTaskLabel) => {
    const newTask = {
      id: generateTaskId(),
      label: newTaskLabel,
      completed: false,
    };
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
    sortTasks(newTasks);
    handleFilterChange(filter, newTasks);

  };

  const updateTask = (newTaskUpdate) => {
    const updatedTasks = tasks.map((task) => (task.id === newTaskUpdate.id ? newTaskUpdate : task));
    setTasks(updatedTasks);
    sortTasks(updatedTasks);
    handleFilterChange(filter, updatedTasks);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    sortTasks(newTasks);
  };

  const handleFilterChange = (newFilter, updatedTasks) => {
    setFilter(newFilter);
    if (newFilter === "all") {
      setFilteredTasks([]);
      return;
    }

    const filterableList = updatedTasks ? updatedTasks : tasks;

    const tempFilteredTasks = filterableList.filter((task) => {
      if (newFilter === "active") {
        return !task.completed;
      }
      if (newFilter === "completed") {
        return task.completed;
      }
      return task;
    });
    setFilteredTasks(tempFilteredTasks);
  }

  const value = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    setFilter: handleFilterChange,
    filteredTasks,
    filter
  };

  return <TaskManagerContext.Provider value={value}  >
    <Header />
    <TaskContainer />
  </TaskManagerContext.Provider>;
};

export default App;
