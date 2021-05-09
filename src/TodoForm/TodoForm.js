import React, {Component} from "react";


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           value: '',
        };
    }

    onChangeHandler = (e) => {
        const { target: { value } } = e;
        this.setState({
            value,
        });
        e.stopPropagation();
    };

    onSubmitHandler = (e) => {
        const { value } = this.state;
        const { onSubmit } = this.props;
        onSubmit({
            id: `${Date.now()}-${Math.random()}`,
            isDone: false,
            text: value,
        });
        e.preventDefault();
    };

    render() {
        const { value } = this.state;
        return (
            <form className='todoForm' onSubmit={this.onSubmitHandler}>
                <input
                    name={'todo'}
                    type={'text'}
                    value={this.state.value}
                    placeholder={'todo text'}
                    onChange={this.onChangeHandler}
                />
                <button type={'submit'}>Add</button>
            </form>
        );
    }
}
export default TodoForm;