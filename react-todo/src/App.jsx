import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "100vh", display: "flex", flexDirection: "column", alignItems: "center"  }}>  
      <h1>My Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
