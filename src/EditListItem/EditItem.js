import React, {Component} from "react";

class EditItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.text,
        };
    }
    onChangeHandler = (e) => {
        const { target: { value } } = e;
        this.setState({
            value,
        });
        e.stopPropagation();
    };

    onEditItem = (e) => {
        const { value } = this.state;
        const { id } = this.props;
        const { editItem} = this.props;
        editItem({id, value});
        e.preventDefault();
    };

       render(){
       const {editClick} = this.props;
       const {value} = this.state;
       if (!editClick) {
           return (
               <p className='p'>{value}</p>
           )
       }
       return(
           <form className='editItem' onSubmit={this.onEditItem}>
               <input
                   value={this.state.value}
                   onChange={this.onChangeHandler}
               />
               {/*<button type={'submit'}></button>*/}
           </form>
       )
   }

}

export default EditItem;
