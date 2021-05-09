import React from "react";

const TodoListItem = (props) => {
    const { todo: { text, isDone }, onToggleTodo } = props;
    const liStyle = {
        textDecoration: (isDone ? 'line-through' : 'initial'),
        color: (isDone ? 'gray' : 'initial'),
    }
    return (
        <li className='todoListItem' style={liStyle}>
            <p>{text}</p>
            <input type={'checkbox'} onChange={onToggleTodo}/>
        </li>
    )
};

export default TodoListItem;