import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ToDoList from './ToDo/ToDoList';
import Header from './Header/Header';
import Form from './Form/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
