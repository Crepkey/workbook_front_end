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

                <button id="home-button" onClick={ ()=> {window.location.href='./'} }>Home</button>
                <button id="add-question-button" onClick={ ()=> {window.location.href='./add-question'} }>Add new question</button>
                <button id="learning-mode-button" onClick={ ()=> {window.location.href='./learning-mode'} }>Learning mode</button>

                <Route exact path="/" component={Home} />
                <Route path="/add-question" component={AddAQuestion} />
                <Route path="/learning-mode" component={LearningMode} />

            </div>
        </Router>
    );
}


/*Components obtaining*/
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <h2 class="align-center">If you really hate learning the theoretical curriculum, you are in the right place</h2>
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
