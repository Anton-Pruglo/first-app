import React, {Component} from "react";
import "./index.css";

export class TodoListItem extends Component {
    constructor(props) {
        super(props);
        const {todo: {text}} = this.props;
        this.state = {
            isEdit: false,
            editableText: text,
        };
    }

    setEdit = (isEdit) =>{
        this.setState({
            isEdit,
        })
    };

    onSubmitEditForm = (e) => {
        const { editableText } = this.state;
        const { onEdit } = this.props;
        onEdit(editableText);
        this.setEdit(false);
        e.stopPropagation();
    }

    render(){
        const { todo: { text, isDone,}, onToggleTodo , onDeleteTodo} = this.props;
        const { isEdit, editableText } = this.state;
        const liStyle = {
            textDecoration: (isDone ? 'line-through' : 'initial'),
            color: (isDone ? 'white' : 'initial'),
        }

        if(isEdit){
            return(
                <li className='todoListItem' >
                    <form onSubmit={this.onSubmitEditForm} className='editTodoForm'>
                        <input
                            name="text"
                            type="text"
                            value={editableText}
                            onChange={(event) => {
                                const { target } = event;
                                this.setState({
                                    editableText: target.value,
                                });
                            }}
                        />
                        <div className='buttonBox'>
                            <button className='btn Save'  type="submit"> </button>
                            <button className='btn Cancel' onClick={() => this.setEdit(false)}> </button>
                        </div>
                    </form>
                </li>
            )
        }
        return (
            <li className='todoListItem' style={liStyle}>
                <span>{text}</span>
                <div className='buttonBox'>
                    <input type={'checkbox'} onChange={onToggleTodo}/>
                    <button className='btn Delete' onClick={onDeleteTodo}> </button>
                    <button className='btn Edit' onClick={() => this.setEdit(true)}> </button>
                </div>
            </li>
        )
    }

};

