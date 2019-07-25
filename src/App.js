/*Libraries*/
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

/*Components*/
import './App.css';
import QuestionTransporter from "./QuestionTransporter";
import AddQuestion from './AddQuestion';

function App() {
    return (
        <Router>
            <div>

                <button onClick="window.location.href='./'">Home</button>
                <button onClick="window.location.href='./add-question'">Add new question</button>
                <button onClick="window.location.href='./learning-mode'">Learning mode</button>

                <Route exact path="/" component={Home} />
                <Route path="/add-question" component={AddAQuestion} />
                <Route path="/learning-mode" component={LearningMode} />

            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function AddAQuestion() {
    return (
        <div>
        <AddQuestion/>
        </div>
    );
}

function LearningMode() {
    return (
        <div>
            <QuestionTransporter/>
        </div>
    );
}

export default App;
