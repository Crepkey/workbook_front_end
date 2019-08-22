import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

/*Components*/
import './App.css';
import LearningMode from "./pages/LearningMode";
import QuestionManagement from './pages/QuestionManagement';
import Button from "./components/button";

import Controller from "./Controller/Controller";


export default function App() {
    return (
            <div>
                <Button id = "home-button"              color = 'turquoise-button'  href='./'>Home</Button>

                {   window.sessionStorage.roles === "ROLE_ADMIN,ROLE_USER" &&
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
                <Controller/>
            </div>

    );
}

