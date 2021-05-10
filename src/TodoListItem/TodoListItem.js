import React from "react";

const TodoListItem = (props) => {
    const { todo: { text, isDone }, onToggleTodo , deleteItem } = props;
    const liStyle = {
        textDecoration: (isDone ? 'line-through' : 'initial'),
        color: (isDone ? 'gray' : 'initial'),
    }

    return (
        <li className='todoListItem' style={liStyle}>
            <p>{text}</p>
            <div className='buttonBox'>
                <input type={'checkbox'} onChange={onToggleTodo}/>
                <button className='btn Delete' onClick={deleteItem}></button>
                <button className='btn Edit' onClick={deleteItem}></button>
            </div>

        </li>
    )
};

export default TodoListItem;