import React from 'react';
import s from './TodoList.moduls.css'
function TodoList({ todo, setTodo }) {


 const [edit, setEdit] = React.useState(null); 
 const [value, setValue] = React.useState('');
 const [search, setSearch] = React.useState('');



// Анонимная функция которая удаляет по id 
// Вызов функцию и в нее передаем id через filter оставляем все которое прошли проверку 
const deleteTodo = (id) => {
  let arrTodo = [...todo].filter(item => item.id!==id);
  setTodo(arrTodo);
};

//Проверяем статус 
const statusTodo = (id) => {
  let arrTodo = [...todo].filter(item => {
    if(item.id === id){
      item.status = !item.status
    }
    return item
  });
  setTodo(arrTodo);

};
//Функция  которая принимает два параметра и записывает их в set
const editTodo = (id, title) => {
  setEdit(id);
  setValue(title)
};
//Сохраняем изменения 
const saveTodo = (id) => {
  let newTodo = [...todo].map(item => {
    if(item.id === id){
      item.title = value;

    }
    return item
  })
  setTodo(newTodo)
  setEdit(null)

};
//Сортируем массив 
//Выполненые todo опускаються в низ 
const sortBy = (arr) => {

  let res = [];
  let old = [];

arr.map((item) => {
  if(item.status == true){
    res.push(item)
  }else old.push(item)
});

  return res.concat(old)
};


  
  return (
    <div className='List__container'>
      <div className='filter__todo'>
        <input placeholder='Filter' value={search} onChange={(e) => setSearch(e.target.value)} className='filter__input' type="text" />
       
      </div>
      {
        sortBy(todo).filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map(item => (
          <div className='todo__row' key={item.id}>
            {
              edit === item.id ? 
              <div className='remak__input'>
                <input className='todo__input' onChange={(e) =>setValue(e.target.value) } value={value} type="text" />
                
              </div> :  <div className={item.status === true ? 'todo__name':'todo__name active' }>{ item.title.length >=  8 ? item.title.slice(0,4) +'...' : item.title}<div className='popup__title'>{item.title}</div></div>
            }
            {
              edit === item.id ? 
              <div className='todo__content'>
                <button className='todo__button' onClick={() => saveTodo(item.id)}>Сохранить</button>
              </div> : 
              <div className='buttons'>
                {item.status === true ? <div className='buttons'>
                <button className='todo__button' onClick={() => deleteTodo(item.id)}>Удалить</button>
                <button className='todo__button' onClick={() => editTodo(item.id, item.title)}>Редактировать</button>
                </div> : ""}
                <button className={item.status === true ? 'todo__button' : 'todo__button act'} onClick={() => statusTodo(item.id)}>{item.status === true ? 'Закрыть' : "Открыть"}</button>
              </div>
              
            }
           
        
          </div>
        ))
      }
    </div>
  )
}

export default TodoList