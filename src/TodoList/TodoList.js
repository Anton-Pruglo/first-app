import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";


function TodoList(props) {
    const { todos, toggleTodo, deleteItem, onSubmit, editItem} = props;
    const todoListItems =todos.map((todo, index) => (
        <TodoListItem
            key={todo.id}
            todo={todo}
            onToggleTodo={() => toggleTodo(index)}
            deleteItem={() => deleteItem(todo.id)}
            onSubmit={onSubmit}
            editItem={editItem}
        />
    ));
    return (
       <ol className='todoList'>
            {todoListItems}
        </ol>
    );
}

export  default TodoList;