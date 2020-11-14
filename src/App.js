import './App.css';
import React from 'react';
import TodoFilter from "./components/todo-filter";
import TodoForm from "./components/todo-form";

const App = () => {
  return (
      <div>
          <TodoForm/>
          <TodoFilter/>
      </div>
  );
};

export default App;
