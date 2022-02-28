import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";

import API from "./API";
import { useNavigate } from "react-router-dom";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    API.loadData().then((data) => setTasks(data));
  }, []);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <ToDo
            key={task.id}
            task={task}
            editTask={API.editTask}
            removeTask={API.removeTask}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;
