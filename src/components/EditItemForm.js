 import React from 'react';
 import PropTypes from 'prop-types';

 class EditItemForm extends React.Component {
    static propTypes = {
        updateItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired      
    };

     handleChange = (e) => {
        // Take the copy of current item
        const updatedItem = {
            ...this.props.item,
            [e.currentTarget.name]: e.currentTarget.value
        };
        this.props.updateItem(this.props.index, updatedItem);
     };
     render() {
         return(
            <form className="item-edit">
            <input 
            name="name" 
            type="text" 
            onChange = {this.handleChange}
            value={this.props.item.name} 
            />
            <input 
            name="price" 
            type="text" 
            onChange = {this.handleChange}
            value={this.props.item.price}
            />
            <select 
            name="status" 
            onChange = {this.handleChange}
            value={this.props.item.status}>
                 <option value="available">Available</option>
                 <option value="unavailable">Sold Out</option>
            </select>
            <textarea 
            name="desc" 
            onChange = {this.handleChange}
            value={this.props.item.desc} />
            <input 
            name="image" 
            type="text" 
            onChange = {this.handleChange}
            value={this.props.item.image} />
            <button  onClick = {() => this.props.deleteItem(this.props.index)}
            type="submit">Remove Item</button>
        </form>
         )
     }
 };

 export default EditItemForm;