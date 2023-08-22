import { createContext, useContext, useState } from "react";

import { createTaskRequest, getTasksRequest } from "../api/tasks.js";

const TaskContext = createContext();
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      console.log(res)
      //setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      console.log(res)
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider value={{tasks, createTask, getTasks}}>{children}</TaskContext.Provider>
  );
}
