import React, {Component} from 'react'

import '../App.css';
import Button from "./Button";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Button id = "home-button"              color = 'turquoise-button'  href='./'>Home</Button>
                {
                    window.sessionStorage.roles === "ROLE_ADMIN,ROLE_USER" &&
                    <Button id = "add-question-button"  color = 'dark-blue-button'  href='./question-management'>Question Management</Button>
                }
                {
                    window.sessionStorage.accessToken !== undefined &&
                    <Button id="learning-mode-button"   color='green-button'        href='./learning-mode'>Learning mode</Button>
                }
                {
                    window.sessionStorage.accessToken === undefined &&
                    <Button id="login-button"           color='light-blue-button'   href='./login'>Login</Button>
                }
                {
                    window.sessionStorage.accessToken !== undefined &&
                    <Button id="logout-button"          color='light-blue-button'   href='./logout'>Logout</Button>
                }
            </div>
        )
    }
}

