import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditRounded } from "@mui/icons-material";
import Switch from "@mui/material/Switch";

import FormEdit from '../src/Form/FormEdit'

function ToDo({ task, editTask, removeTask, editTaskForm }) {
  const [checked, setChecked] = useState(!task.isCompleted);
  const [edit, setEdit] = useState(false);

  function handleEdit() {
     //navigate('/editForm') 
    setEdit(true)
    //console.log(task.title)
    editTask(task);
  }

  function handleDelete() {
    removeTask(task);
  }

  function handleChecked() {
    setChecked(!checked);
    editTask({ ...task, isCompleted: checked });
  }

  return (
    <p>
      {task.title} | {task.priority} | 
      {task.isCompleted ? (
        <Switch size="small" onClick={handleChecked} defaultChecked />
      ) : (
        <Switch size="small" onClick={handleChecked} />
      )}
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit" onClick={handleEdit}>
        <EditRounded />
      </IconButton>
      {edit && <FormEdit task={task}/>}
    </p>
  );
}

export default ToDo;
