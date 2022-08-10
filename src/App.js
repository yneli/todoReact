//Добавляем импорты 
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import React from 'react';
import './index.css';



function App() {

//Объявляем хук useState для хранения todo
  const [todo, setTodo] = useState([
  ])






  return (
    <div className='wrapper'>
    <div className="App">
     <Header></Header>
     <AddTodo todo={todo} setTodo={setTodo}></AddTodo>
     <TodoList todo={todo} setTodo={setTodo}></TodoList>
    </div>
    </div>
  );
}

export default App;
