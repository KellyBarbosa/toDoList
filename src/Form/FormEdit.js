import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "./ToDoForm.css";

function FormEdit( editTaskData ) {
  console.log(editTaskData.task)
  const [title, setTitle] = useState(editTaskData.task.title);
  const [priority, setPriority] = useState(editTaskData.task.priority);
  let navigate = useNavigate();
  const currencies = [
    {
      value: "Low",
      label: "Low",
    },
    {
      value: "Medium",
      label: "Medium",
    },
    {
      value: "High",
      label: "High",
    },
  ];

  
  function handleSubmit(e) {
    e.preventDefault();
    //setInput("");
    if (title !== "" && title !== null && title.trim() !== "") {
      editTask({ title, priority });
    } else {
      alert("Preencha o campo antes de enviar!");
    }
  }

  function editTask(taskData) {
    console.log('Edit Form, task: ', taskData)

    //navigate('/editForm', { screen: '/editForm', props:  {taskData}})
    //console.log('Edit: ',taskData)
    fetch(`http://localhost:5000/tasks/${editTaskData.task.id}`, {
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
        navigate('/');
      })
      .catch((err) => console.log(err));
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
        sx={{ marginRight: "10px" }}
      />

      <TextField
        id="outlined-select-currency"
        select
        label="Priority level"
        value={priority}
        onChange={handlePriority}
        sx={{ marginRight: "10px", width: "120px" }}
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
          color: "#BF3646",
          borderColor: "#BF3646",
          height: "55px",
        }}
        endIcon={<SendIcon />}
      >
        Save
      </Button>
    </form>
  );
}

export default FormEdit;
