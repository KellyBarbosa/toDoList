import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import './Form.css';
import API from '../API/API';

function Form() {
  const location = useLocation();

  const [title, setTitle] = useState(() => {
    if (location.state === null) {
      return '';
    } else {
      return location.state.title;
    }
  });
  const [priority, setPriority] = useState(() => {
    if (location.state === null) {
      return 'Low';
    } else {
      return location.state.priority;
    }
  });
  const [task, setTask] = useState(() => {
    if (location.state === null) {
      return [];
    } else {
      return location.state;
    }
  });
  //console.log(taskData)
  let navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      console.log('Cria');
      API.loadData().then((data) => setTask(data));
    } else {
      console.log('Edita');
    }
  }, []);

  const currencies = [
    {
      value: 'Low',
      label: 'Low',
    },
    {
      value: 'Medium',
      label: 'Medium',
    },
    {
      value: 'High',
      label: 'High',
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (title !== '' && title !== null && title.trim() !== '') {
      if (location.state === null) {
        API.addTask(task.length + 1, { title, priority }).then(navigate('/'));
      } else {
        API.editTask({ ...task, title, priority }).then(navigate('/'));
      }
      //editTask({ title, priority });
    } else {
      alert('Preencha o campo antes de enviar!');
    }
  }

  function handlePriority(e) {
    setPriority(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Enter a new task"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginRight: '10px' }}
      />

      <TextField
        id="outlined-select-currency"
        select
        label="Priority level"
        value={priority}
        onChange={handlePriority}
        sx={{ marginRight: '10px', width: '120px' }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button
        type="submit"
        variant="outlined"
        sx={{
          color: '#BF3646',
          borderColor: '#BF3646',
          height: '55px',
        }}
        endIcon={<SendIcon />}
      >
        {location.state === null ? 'Send' : 'Save'}
      </Button>
    </form>
  );
}

export default Form;
