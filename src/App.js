import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountDisplay from './components/Counter/CountDisplay';
import TodoWrapper from './components/Todo/TodoWrapper';

function App() {
  return (
    <div className="App">
      <CountDisplay name="CURRENT1"></CountDisplay>
      <TodoWrapper></TodoWrapper>
    </div>
  );
}

export default App;
