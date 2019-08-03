/*Libraries*/
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

/*Components*/
import './App.css';
import QuestionTransporter from "./LearningMode";
import AddQuestion from './AddQuestion';
import Button from "./components/button";


function App() {
    return (
        <Router>
            <div>

                <Button id = "home-button"          color = 'turquoise-button'  href='./'>Home</Button>
                <Button id = "add-question-button"  color = 'dark-blue-button'  href='./add-question'>Add new question</Button>
                <Button id = "learning-mode-button" color = 'green-button'      href='./learning-mode'>Learning mode</Button>

                <Route exact path="/"           component={Home} />
                <Route path="/add-question"     component={AddAQuestion} />
                <Route path="/learning-mode"    component={LearningMode} />

            </div>
        </Router>
    );
}


/*Components obtaining*/
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <h2 className="align-center">If you really hate learning the theoretical curriculum, you are in the right place</h2>
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
