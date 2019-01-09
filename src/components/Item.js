import React from 'react';
import { formatPrice } from '../helper';
import PropTypes from 'prop-types';

class Item extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string            
        }),
        addToOrder: PropTypes.func.isRequired
    }

    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        return (
            <React.Fragment>
            <li className="menu-item">
                <img src={image} alt={desc}/>
                <h3>{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <div className="cart-center">
                <p>{desc}</p>
                <button 
                disabled={!isAvailable}
                onClick={() => this.props.addToOrder(this.props.index)}
                >
                {isAvailable ? "Add To Cart" : "Sold Out!!"}
                </button>
                </div>
            </li>
            </React.Fragment>
        )
    }
};

export default Item;
