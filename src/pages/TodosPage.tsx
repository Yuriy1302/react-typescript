import React, { useState, useEffect } from 'react';

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

import { ITodo } from '../interfaces';

/*
Если хотим обратиться к методу confirm, но не хотим обращаться к window,
можно воспользоваться синтаксисом TS записать так:
*/
declare var confirm: (question: string) => boolean;
/* Так же можно использовать методы из сторонних библиотек */

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(saved)
  }, []) // При пустом массиве вызывается один раз, когда реакт уже сооединил шаблон компонента с дом-деревом

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Здесь хук следит за изменением указанного параметра, если он изменен, выполняетя тело useEffect

  const addHandler = (title: string) => {
    /* console.log('Add new todo: ', title); */
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }

    setTodos((prev) => [newTodo, ...prev]);
  }

  const toggleHandler = (id: number) => {
    console.log("toggleHandler: ", id);
    setTodos(todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    );
  }

  const removeHandler = (id: number) => {
    /* const shoudRemove = window.confirm('Вы уверены, что хотите удалить задачу?'); */
    /* Метод confirm является методом глобального объекта window, поэтому пишем так (см.выше) */
    /* В случае отмены - отмечается чек */
    
    const shoudRemove = confirm('Вы уверены, что хотите удалить задачу?'); // см. в начале как задать тип через declare, чтобы не обращаться к глобальному объекту window
    
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  }

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
}