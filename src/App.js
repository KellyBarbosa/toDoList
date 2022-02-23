import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ToDoList from "./ToDoList";
import Header from "./Header/Header";
import ToDoForm from "./Form/ToDoForm";
import FormEdit from "./Form/FormEdit";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/form" element={<ToDoForm />} />
          <Route path="/editForm" element={<FormEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
