import Reabase from 're-base';
import firebase from 'firebase';

const fBase = firebase.initializeApp({
    apiKey: "AIzaSyBQ7Y_s7upj1D_6YOte4ywnFJPJEIasDuY",
    authDomain: "product-listing-4b0b4.firebaseapp.com",
    databaseURL: "https://product-listing-4b0b4.firebaseio.com"
});

const base = Reabase.createClass(firebase.database());

// This is a named export
export { fBase };
// This is a default export 
export default base; 