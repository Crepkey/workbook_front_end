import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

/*_________________________IMPORT_PAGES______________________*/

import Home                 from "../pages/Home";
import QuestionManagement   from "../pages/QuestionManagement";
import AddQuestion          from "../pages/AddQuestion";
import EditQuestion         from "../pages/EditQuestion";
import LearningMode         from "../pages/LearningMode";
import Login                from "../pages/Login";
import Logout               from "../pages/Logout";

export default function Controller(){
    return(
        <Router>
            <div>
                <Route exact path="/"               component={ () => <Home/> }                 />
                <Route path="/question-management"  component={ () => <QuestionManagement/> }   />
                <Route path="/add-question"         component={ () => <AddQuestion/> }          />
                <Route path="/edit-question/:qID"   component={ () => <EditQuestion/> }         />
                <Route path="/learning-mode"        component={ () => <LearningMode/> }         />
                <Route path="/login"                component={ () => <Login/> }                />
                <Route path="/logout"               component={ () => <Logout/> }               />
            </div>
        </Router>
    )
}

