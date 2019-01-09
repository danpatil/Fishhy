import React from 'react';
import base from '../base'; 
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleItems from '../sampleItem';
import Item from './Item';
import PropTypes from 'prop-types';

class App extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    }

    // States 
    state = {
        items: {},
        order: {}
    };

    componentDidMount() {
        // Reinstate local Storage
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
        this.refs = base.syncState(`${this.props.match.params.storeId}/items`, {
            context: this,
            state: 'items'
        });
    };

    componentWillUnmount() {
        base.removeBinding(this.refs);
    }; 

    componentDidUpdate() {
         localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    addItem = (item) => {
        // Take the copy of items state
        const items = { ...this.state.items };
        //  Add the item to the items variable
        /* We use the Date.now() for genrating the milliseconds value */
        items[`item${Date.now()}`] = item;
        // Set the state
        this.setState({items});
    };

    loadSampleItems = () => {
        this.setState({
            items: sampleItems
        });
    };

    addToOrder = (key) => {
        // Take the copy of the state
        const order = {...this.state.order};
        // Update the state or Update the number in the order state
        order[key] = order[key] + 1 || 1;
        // Set state 
        this.setState({order});
    };

    updateItem = (key, updatedItem) => {
        // Take the copy of current state
        const items = {...this.state.items};
        // Update the state
        items[key] = updatedItem;
        // Set the state
        this.setState({items});
    };

    deleteItem = (key) => {
        // Copy state
        const items = {...this.state.items};
        // Set state
        items[key] = null;
        // Update state
        this.setState({items});
    };

    deleteFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order})
    };

    render() {
        return (
             <div className="main-app">
                 <div className="display-menu">
                     <Header tagline='Your Fish Market' />
                     <ul className="items">
                        {Object.keys(this.state.items)
                            .map(key => <Item 
                            key={key} 
                            index= {key}
                            details = {this.state.items[key]}
                            addToOrder={this.addToOrder}
                             />)}  
                     </ul>
                 </div>
                 <Order  
                     item = {this.state.items}
                     order = {this.state.order}
                     deleteFromOrder = {this.deleteFromOrder}
                 />
                 <Inventory 
                 addItem = {this.addItem}
                 updateItem = {this.updateItem}
                 deleteItem = {this.deleteItem}
                 loadSampleItems = {this.loadSampleItems}
                 item = {this.state.items}
                 storeId = {this.props.match.params.storeId }
                  />
             </div>
        )
    }
};

export default App;