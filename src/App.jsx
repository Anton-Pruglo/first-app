
import React, {Component} from "react";
import './App.css';
import './index.css';
import {TodoList} from "./components/TodoList";
import {TodoForm} from "./components/TodoForm";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
             todos: [
                {
                    id: 1,
                    text: 'Сделать TodoList',
                    isDone: false,
                },
                {
                    id: 2,
                    text: 'Снова сделать TodoList',
                    isDone: false,
                },
                {
                    id: 3,
                    text: 'Опять сделать TodoList',
                    isDone: false,
                },
                {
                    id: 4,
                    text: 'Фффф как сложно',
                    isDone: false,
                },
                {
                    id: 5,
                    text: 'Я устал',
                    isDone: false,
                },
                {
                    id: 6,
                    text: 'Ееее сделал!!!',
                    isDone: false,
                },
            ],
        };
    }

    toggleTodo = (index) => {
        const { todos } = this.state;
        const newTodos = [...todos];

        newTodos[index] = {
            ...todos[index],
            isDone: !todos[index].isDone,
        };

        this.setState({
            todos: newTodos,
        });
    };

    addTodo = (todo) => {
        const { todos } = this.state;
        this.setState({
            todos: [todo, ...todos],
        });
    };

    deleteTodo = (index) => {
        const { todos } = this.state;
        const newTodos = [...todos];
        newTodos.splice(index,1);
        this.setState({
            todos: newTodos,
        })
    }

    editTodo = (index, text) => {
        const { todos } = this.state;
        const newTodos = [...todos]
        newTodos[index] = {
            ...todos[index],
            text,
        }
       this.setState({ todos: newTodos });
    };

    render() {
        const { todos } = this.state;
        return (
            <article className='todoApp'>
                <TodoForm  onSubmit={this.addTodo}/>
                <TodoList
                    todos={todos}
                    onToggleTodo={this.toggleTodo}
                    onDeleteTodo={this.deleteTodo}
                    onAdd={this.addTodo}
                    onEditTodo={this.editTodo}
                />
            </article>
        )
    }
}
export default App;
