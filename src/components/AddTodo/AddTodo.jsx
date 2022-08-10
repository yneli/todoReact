import React from 'react';
import { useState } from 'react';
import s from './AddTodo.moduls.css'


function AddTodo({setTodo, todo}) {

//Создаем хранилище для input что бы могли в дальнейшем сохранить в наш todo при помощи setTodo
  const [value, setValue] = useState('');
  const saveTodo = () => {
    if(value){
      setTodo(
        [...todo, {
          id: Math.random().toString(36).substring(2, 9),
          title: value,
          status: true
        }]
        )
    }
      setValue('');
  }


  return (
    <div className='item'>
      <input className='add_todo' placeholder="Твоя задача"  value={value} onChange={(e) => setValue(e.target.value)}/>
      <button className='button__todo' onClick={saveTodo}>Добавить</button>
    </div>
  )
}

export default AddTodo