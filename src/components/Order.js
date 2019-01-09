import React from 'react';
import { formatPrice } from '../helper';
import PropTypes from 'prop-types';

class Order extends React.Component {
    static propTypes = {
        item: PropTypes.object,
        order: PropTypes.object,
        deleteFromOrder: PropTypes.func.isRequired,        
    };

    renderOrder = (key) => {
        const item = this.props.item[key];
        const count = this.props.order[key];
        const isAvailable = item && item.status === 'available';
        // Return null instead item status
        if (!item) return null;
        if (!isAvailable) {
          return <li key={key}>
              Sorry {item ? item.name: "Item"} no longer available;
          </li>
        }
        return <li key = {key}>
            {count} lbs = {item.name}
            {formatPrice(count * item.price)}
            <button className='times-delete' onClick={() => this.props.deleteFromOrder(key)}>&times;</button>
        </li>
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const item = this.props.item[key];
            const count = this.props.order[key];
            const isAvailable = item && item.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * item.price);
            }
            return prevTotal;
        },0);
        return (
            <React.Fragment>
           <div className="order-wrap">
               <h2>Order</h2>
               <div id="center-center">
               <div className="bottom-border"></div>
               <ul id= "order">
                   {orderIds.map(this.renderOrder)}
               </ul>
               <div className="bottom-border"></div>
               <div id="total">
               Total: 
                   <strong>{formatPrice(total)}</strong>
               </div>
               </div>
               </div>
               </React.Fragment>
           
        )
    }
};

export default Order;