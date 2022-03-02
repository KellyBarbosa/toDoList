import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import './Header.css';

const Header = () => {
  let navigate = useNavigate();

  function handleClickForm() {
    navigate('/form');
  }

  function handleClickHome() {
    navigate('/');
  }

  return (
    <div className="Header">
      <h1 onClick={handleClickHome}>To Do List</h1>
      <Button
        variant="outlined"
        className="btnAdd"
        sx={{
          color: 'white',
          borderColor: 'white',
          height: '40px',
        }}
        onClick={handleClickForm}
      >
        Add new task
      </Button>
    </div>
  );
};

export default Header;
