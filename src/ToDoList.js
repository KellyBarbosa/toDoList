import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./Form/ToDoForm";

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

  /* function addTask({ input, priority }) {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: tasks.length + 1,
        title: input,
        priority: priority,
        isCompleted: false,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        loadData();
      })
      .catch((err) => console.log(err));
  } */

  function editTask(taskData) {
    //console.log('Edit: ',taskData)
    fetch(`http://localhost:5000/tasks/${taskData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        //loadData();
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

      {/*  <ToDoForm addTask={addTask} /> */}
    </div>
  );
}

export default ToDoList;
