import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    fetch("http://localhost:5000/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }

  function editTask(taskData) {

    fetch(`http://localhost:5000/tasks/${taskData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((resp) => resp.json())
      .then((data) => {

      })
      .catch((err) => console.log(err));
  }

  function removeTask(taskData) {
    fetch(`http://localhost:5000/tasks/${taskData.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        //loadData()
      })
      .catch((err) => console.log(err));
  }


  return (
    <div>
      {tasks.map((task) => {
        return (
          <ToDo
            key={task.id}
            task={task}
            editTask={editTask}
            removeTask={removeTask}
          />
        );
      })}

    </div>
  );
}

export default ToDoList;
