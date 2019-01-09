import React from 'react';
import notFound from '../css/img/not-found.svg';

class NotFound extends React.Component {
    render() {
        return(
            <div className="page-not-found">
            <div className="tagline-h1"></div>
            <h1 className="notFound-tagline">404 : page you are looking for is not found.</h1>
            <img className="notFound" src={notFound} alt="404 Not Found"/>
            </div>
        )
    }
};

export default NotFound;