import React, {Component} from 'react';

/*Components*/

import QuestionFilter from "../components/QuestionFilter";
import Button from "../components/button";
import AddQuestion from "./AddQuestion";

export default class QuestionManagement extends Component{

    render() {
        return (
            <div>
                <QuestionFilter/>
                <Button color="light-blue-button
                                margin-10px-from-all-direction"
                        href="./add-question">
                    Add new question
                </Button>
            </div>
        )
    }
}