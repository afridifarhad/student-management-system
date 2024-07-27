import React from "react";
import "./App.css";
import CreateStudent from "./components/CreateStudent";

function App() {

  return (
    <div className="app-container">
      <h1 className="app-tittle"> Student Management System</h1>
      <CreateStudent />
    </div>
  );
}

export default App;
