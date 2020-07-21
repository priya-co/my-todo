import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
