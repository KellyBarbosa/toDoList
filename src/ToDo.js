import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditRounded } from "@mui/icons-material";
import Switch from "@mui/material/Switch";

function ToDo({ task, editTask, removeTask }) {
  const [checked, setChecked] = useState(!task.isCompleted);
  // const [editTasks, setEditTasks] = useState([]);

  //console.log('Task: ', task, 'Checked: ', checked)

  function handleEdit() {
    editTask(task);
  }

  function handleDelete() {
    removeTask(task);
  }

  function handleChecked() {
    setChecked(!checked);
    //console.log('Task: ', task, 'Checked: ', checked)
    //console.log('Handle 1: ', task)
    //setEditTasks({...task, isCompleted: checked})
    //console.log('Handle 2: ',editTasks)
    editTask({ ...task, isCompleted: checked });
    //editTask({...task, checked})
    //console.log('Task: ', task, 'Checked: ', checked)
  }

  return (
    <p>
      {task.title} | {task.priority} | 
     {/*  {task.isCompleted ? "Tarefa finalizada" : "Tarefa não finalizada"} */}
      {task.isCompleted ? (
        <Switch size="small" onClick={handleChecked} defaultChecked />
      ) : (
        <Switch size="small" onClick={handleChecked} />
      )}
      {/* <Switch onClick={handleChecked}/> */}
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit" onClick={handleEdit}>
        <EditRounded />
      </IconButton>
    </p>
  );
}

export default ToDo;
