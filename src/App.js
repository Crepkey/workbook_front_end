/*Libraries*/
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

/*Components*/
import './App.css';
import LearningMode from "./pages/LearningMode";
import QuestionManagement from './pages/QuestionManagement';
import Button from "./components/button";
import Home from "./pages/Home"
import AddQuestion from "./pages/AddQuestion";


export default function App() {
    return (
        <Router>
            <div>
                <Button id = "home-button"          color = 'turquoise-button'  href='./'>Home</Button>
                <Button id = "add-question-button"  color = 'dark-blue-button'  href='./question-management'>Question Management</Button>
                <Button id = "learning-mode-button" color = 'green-button'      href='./learning-mode'>Learning mode</Button>
            </div>
            <div>
                <Route exact path="/"               component={ () => <Home/> } />
                <Route path="/question-management"  component={ () => <QuestionManagement/> } />
                <Route path="/add-question"         component={ () => <AddQuestion/> } />
                <Route path="/learning-mode"        component={ () => <LearningMode/> } />
            </div>
        </Router>
    );
}

