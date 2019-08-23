import React, {Component} from 'react';
import '../static/css/App.css';


export default class Logout extends Component {

    componentDidMount() {
        window.sessionStorage.clear();
    }

    render() {
        return (
            <div>
                <h1>Thank you for using our application</h1>
                <h2>You has been logged out</h2>
            </div>
        )
    }
};