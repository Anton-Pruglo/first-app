import React, {Component} from "react";
import EditItem from "../EditListItem/EditItem";

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
        };
        this.click = this.click.bind(this);
    }
    click() {
        this.setState(prevState => ({
            value: !prevState.value
        }))
    }
    render(){
        const { todo: { text, isDone, id }, onToggleTodo , deleteItem, editItem, onSubmit} = this.props;
        const {value} = this.state;
        const liStyle = {
            textDecoration: (isDone ? 'line-through' : 'initial'),
            color: (isDone ? 'white' : 'initial'),
        }
        const btnStyle = {
            background: (value ? `url("https://www.flaticon.com/svg/vstatic/svg/753/753318.svg?token=exp=1621000092~hmac=886b01664af4987cace9529a631879f5")` : `url("https://www.flaticon.com/svg/vstatic/svg/2919/2919592.svg?token=exp=1620674649~hmac=bba3302b065558de199b1482c53ed84c")`),
            backgroundPosition: 'center',
            backgroundSize: 'contain',
        }

        return (
            <li className='todoListItem' style={liStyle}>
                <EditItem
                    className='EditItem'
                    text={text}
                    id={id}
                    editClick={value}
                    onSubmit={onSubmit}
                    editItem={editItem}
                />
                <div className='buttonBox'>
                    <input type={'checkbox'} onChange={onToggleTodo}/>
                    <button className='btn Delete' onClick={deleteItem}></button>
                    <button className='btn' style={btnStyle} onClick={this.click}></button>
                </div>
            </li>
        )
    }

};

export default TodoListItem;