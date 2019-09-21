import React, { Component } from 'react';
import Util from "../Util/Util";


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
        response.roles.forEach( role => sessionStorage.setItem(role, 'true'));
        alert("You has been logged in")
    }

    createJSON(formData) {
        let json = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        let jsonBody = {};
        for (const [key, value] of formData) {
            jsonBody[key] = value
        }
        json['body'] = JSON.stringify(jsonBody);

        return json
    }

    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        let requestJSON = this.createJSON(formData);

        Util.fetchFromURL(this.state.apiAddress, requestJSON).then(response => this.handleResponse(response))
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