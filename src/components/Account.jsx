import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'


export default class Account extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            apiAddress : this.props.apiAddress
        }
    }

    handleResponse(response) {
        window.sessionStorage.accessToken = response.accessToken;
        window.sessionStorage.roles = response.roles;
        alert("You has been logged in")
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        let jsonData = {};

        for (const [key, value] of formData) {
            jsonData[key]=value
        }

        fetch(this.state.apiAddress, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData)
        }).then(res => res.json())
            .then(response => this.handleResponse(response))
            .catch(error => console.error('Error:', error));
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                {/*Username*/}
                <p>
                    <label htmlFor="username">Username</label>
                    <textarea id="username" name="username"/>
                </p>
                {/*Password*/}
                <p>
                <label htmlFor="password">Password</label>
                <textarea id="password" name="password"/>
                </p>

                <button id="send-login" className="red-button">Login</button>
            </form>
        )
    }
};