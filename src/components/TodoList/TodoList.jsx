import React from "react";
import {TodoListItem} from "../TodoListItem";
import "./index.css";


export function TodoList(props) {
    const { todos, onToggleTodo, onDeleteTodo, onAdd, onEditTodo} = props;
    const todoListItems =todos.map((todo, index) => (
        <TodoListItem
            key={todo.id}
            todo={todo}
            onToggleTodo={() => onToggleTodo(index)}
            onDeleteTodo={() => onDeleteTodo(todo.id)}
            onAdd={onAdd}
            onEdit={
                (text) => onEditTodo(index, text)
            }
        />
    ));
    return (
       <ol className='todoList'>
            {todoListItems}
       </ol>
    );
}

