import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { EditRounded } from '@mui/icons-material';
import Switch from '@mui/material/Switch';

function ToDo({ task, editTask, removeTask }) {
  const [checked, setChecked] = useState(!task.isCompleted);

  let navigate = useNavigate();

  function handleEdit() {
    navigate('/form', { state: task });
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
      {<Switch size="small" onClick={handleChecked} checked={!checked} />}
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
