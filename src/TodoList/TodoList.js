import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";


function TodoList(props) {
    const { todos, toggleTodo, deleteItem} = props;
    // const activeTask = todos.filter(task => task.isDone === false);
    // const doneTask = todos.filter(task => task.isDone === true);
    const todoListItems =/*[...activeTask,...doneTask]*/todos.map((todo, index) => (
        <TodoListItem
            key={todo.id}
            todo={todo}
            onToggleTodo={() => toggleTodo(index)}
            deleteItem={() => deleteItem(todo.id)}
        />
    ));
    return (
       <ol className='todoList'>
            {todoListItems}
        </ol>
    );
}

export  default TodoList;