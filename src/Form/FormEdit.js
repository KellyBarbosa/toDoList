import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "./ToDoForm.css";

function FormEdit( editTaskData ) {
  console.log(editTaskData)
  const [input, setInput] = useState(editTaskData.title);
  const [priority, setPriority] = useState(editTaskData.priority);

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
    if (input !== "" && input !== null && input.trim() !== "") {
      //editTask({ input, priority });
    } else {
      alert("Preencha o campo antes de enviar!");
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
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
