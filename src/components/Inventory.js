import React from 'react';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import Login from './Login';
import firebase from 'firebase';
import { fBase } from '../base';
import base from '../base';

class Inventory extends React.Component {
    state = {
        uid: null,
        owner: null 
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({ user });
            }
        })
    }

    authHandler = async (authData) => {
        // look up the current store in the firebase database
        const store = await base.fetch(this.props.storeId, { context: this });
        // claim it i f thier is no owner
        if (!store.owner) {
            // Save it as our own store
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        }
        // set the state to inventory component
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid 
        });
    }

    authenticate = (provider ) => {
         const  authProvider = new firebase.auth[`${provider}AuthProvider`]();
         fBase.auth().signInWithPopup(authProvider).then( this.authHandler); 
    };

    logout = async () => {
        console.log('Logging out');
        await firebase.auth().signOut(); 
        this.setState({
            uid: null
        })
    };

    render() {
        const logout = <button className="logout" onClick={this.logout}>Log Out</button>
        // Check if the user is logged in
        if (!this.state.uid) {
            return <Login authenticate = {this.authenticate} /> 
        };
        // Check if they not are the owner of the store
        if (this.state.uid !== this.state.owner) {
            return(
                <div className="not-allowed">
                    <h2>You are not the owner of the store</h2>
                    {logout}
                </div>
            );
        };
        // if no objection then render following
        return (
           <div className="inventory">
               <h3>Inventory</h3>
               {logout}
               {Object.keys(this.props.item).map(key => <EditItemForm
                index={key} 
                updateItem={this.props.updateItem} 
                key={key} 
                item={this.props.item[key]} 
                deleteItem = {this.props.deleteItem}    
                />)}
               <div className="bottom-border"></div>
               <AddItemForm 
               addItem = {this.props.addItem}
                />
                <button className= "load-sample-item" onClick = {this.props.loadSampleItems}>Load Sample Items</button>
           </div>
        )
    }
};

export default Inventory;