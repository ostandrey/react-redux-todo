import './App.css';
import React from 'react';
import TodoFilter from "./components/todo-filter";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

const App = () => {
  return (
      <div className={'wrapper'}>
          <TodoForm/>
          <TodoFilter/>
          <TodoList/>
      </div>
  );
};

export default App;
