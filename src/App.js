
import React, {Component} from "react";
import './App.css';
import './index.css';
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";


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

    deleteItem = (id) => {
        const { todos } = this.state;
        const filteredItems = todos.filter(todo => todo.id !== id)
        this.setState({
            todos: filteredItems
        })
    }

    editItem = (id, value) => {
        const { todos } = this.state;
        const newItem = todos.map((todo) => {
           if (todo.id !== id) {
                return todo;
           }
           return { ...todo, text: value };
       });
       this.setState({ todos: newItem });
    };

    render() {
        const { todos } = this.state;
        return (
            <article className='todoApp'>
                <TodoForm  onSubmit={this.addTodo}/>
                <TodoList
                    todos={todos}
                    toggleTodo={this.toggleTodo}
                    deleteItem={this.deleteItem}
                    onSubmit={this.addTodo}
                    editItem={this.editItem}
                />
            </article>
        )
    }
}
export default App;
