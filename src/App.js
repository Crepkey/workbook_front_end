/*Libraries*/
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

/*Components*/
import './App.css';
import LearningMode from "./pages/LearningMode";
import AddQuestion from './pages/AddQuestion';
import Button from "./components/button";
import Home from "./pages/Home"


export default function App() {
    return (
        <Router>
            <div>

                <Button id = "home-button"          color = 'turquoise-button'  href='./'>Home</Button>
                <Button id = "add-question-button"  color = 'dark-blue-button'  href='./add-question'>Add new question</Button>
                <Button id = "learning-mode-button" color = 'green-button'      href='./learning-mode'>Learning mode</Button>

                <Route exact path="/"           component={ () => <Home/> } />
                <Route path="/add-question"     component={ () => <AddQuestion/> } />
                <Route path="/learning-mode"    component={ () => <LearningMode/> } />

            </div>
        </Router>
    );
}

