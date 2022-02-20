import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ToDoList from "./ToDoList";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ToDoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
