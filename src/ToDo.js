import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditRounded } from "@mui/icons-material";
import Switch from "@mui/material/Switch";

import { useNavigate } from "react-router-dom";

function ToDo({ task, editTask, removeTask }) {
  const [checked, setChecked] = useState(!task.isCompleted);

  let navigate = useNavigate();

  function handleEdit() {
    navigate("/editForm", { state: task });
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
    </p>
  );
}

export default ToDo;
