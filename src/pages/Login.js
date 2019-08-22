import React, {Component} from 'react';


import '../App.css';

import Account from "../components/Account";

export default class Login extends Component {
    render() {
        return(
            <div>
                <h1>Welcome in the Login Page</h1>
                <h2>Please type here your account's data</h2>
                <Account apiAddress="http://localhost:8080/auth/signin"/>
            </div>
        )
    }
};