import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";


function TodoList(props) {
    const { todos, toggleTodo} = props;
    const activeTask = todos.filter(task => task.isDone === false);
    const doneTask = todos.filter(task => task.isDone === true);
    const todoListItems =[...activeTask,...doneTask].map((todo, index) => (
        <TodoListItem
            key={todo.id}
            todo={todo}
            onToggleTodo={() => toggleTodo(index)}
        />
    ));
    return (
       <ul className='todoList'>
            {todoListItems}
        </ul>
    );
}

export  default TodoList;