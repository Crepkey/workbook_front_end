import React, {Component} from 'react';
import '../App.css';
import Account from "../components/Account";

export default class Login extends Component {
    render() {
        return(
            <div>
                <h1>Please login</h1>
                <Account apiAddress="http://localhost:8080/auth/signin"/>
            </div>
        )
    }
};