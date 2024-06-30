import React, {useState} from 'react';
import Index from "../TodoItem";
import {Todo} from "../types";


const TodoList = () => {


    const [todos, setTodos] = useState<Todo[]>([])
    const [todoText, setTodoText] = useState('')
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setTodoText(event.target.value)
    }

    const handleAddTodo = () =>
    {
        if(todoText) setTodos([...todos, {text: todoText, status: false, id: todos.length+1}])
    }

    const handleRemoveTodo = (todo: Todo) =>
    {
        setTodos([...todos.filter(el => el.id != todo.id)])
    }

    return (
        <>
            <input onChange={handleChangeInput}/>
            <button onClick={handleAddTodo}>Добавить</button>
            {
                todos.length > 0 ? todos.map(((item, index) =>
                    <Index item={item} index={index+1} remove={handleRemoveTodo}/>))
                    : <h3>Нет ни одного дела в списке!</h3>
            }
        </>
    );
};

export default TodoList;