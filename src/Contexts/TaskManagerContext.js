import { createContext } from 'react';

const TaskContext = createContext({
    tasks: [],
    filter: 'all',
    setTasks: () => { },
    setFilter: () => { },
});

export default TaskContext;