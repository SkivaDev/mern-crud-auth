import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TasksContext";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  console.log(tasks);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {tasks.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <h1 className="font-bold text-xl">
              No tasks yet, please add a new task
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {tasks.map((task) => (
          <div key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TasksPage;
