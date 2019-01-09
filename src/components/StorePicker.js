import React from 'react';
import { funNames } from '../helper';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
    inputVal = React.createRef();
    static propTypes = {
        history: PropTypes.object
    };

    getValue = React.createRef();

    preventDefault = (e) => {
        e.preventDefault();
        const storeName = this.getValue.current.value;
        this.props.history.push(`store/${storeName}`);
    }
    
    render() {
        return (
            <div className= 'app'>
                <form className="select-store" onSubmit={this.preventDefault}>
                    <h2>Please Enter Store Name</h2>
                    <input 
                    type="text"
                    required 
                    ref = {this.getValue}   
                    placeholder="Enter Store Name" 
                    defaultValue={ funNames() }
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </div>
           
        )
    }
};

export default StorePicker;