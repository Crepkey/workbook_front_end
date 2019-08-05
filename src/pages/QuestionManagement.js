import React, {Component} from 'react';

/*Components*/

import QuestionFilter from "../components/QuestionFilter";

export default class QuestionManagement extends Component{

    render() {
        return (
            <div>
              <QuestionFilter/>
            </div>
        )
    }
}