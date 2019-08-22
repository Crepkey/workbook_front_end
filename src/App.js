Simport React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

/*Components*/
import './App.css';
import LearningMode from "./pages/LearningMode";
import QuestionManagement from './pages/QuestionManagement';
import Button from "./components/button";
import Home from "./pages/Home"
import AddQuestion from "./pages/AddQuestion";
import EditQuestion from "./pages/EditQuestion";
import Login from "./pages/Login";
import Logout from "./pages/Logout";


export default function App() {
    return (
        <Router>
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
            </div>
            <div>
                <Route exact path="/"               component={ () => <Home/> } />
                <Route path="/question-management"  component={ () => <QuestionManagement/> } />
                <Route path="/add-question"         component={ () => <AddQuestion/> } />
                <Route path="/edit-question/:qID"   component={ () => <EditQuestion/> } />
                <Route path="/learning-mode"        component={ () => <LearningMode/> } />
                <Route path="/login"                component={ () => <Login/> } />
                <Route path="/logout"               component={ () => <Logout/> } />
            </div>
        </Router>
    );
}

