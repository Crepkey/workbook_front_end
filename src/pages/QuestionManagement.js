import React, {Component} from 'react';

/*Components*/

import QuestionFilter from "../components/QuestionFilter";
import Button from "../components/button";
import QuestionTitle from "../components/QuestionTitle";

export default class QuestionManagement extends Component{

    state={
        questions : [
            {ID : 1, title: "This is a sample text which represents the title of a question"},
            {ID : 2, title: "This is a sample text which represents the title of a question"},
            {ID : 3, title: "This is a sample text which represents the title of a question"},
            {ID : 4, title: "This is a sample text which represents the title of a question"},
            {ID : 5, title: "This is a sample text which represents the title of a question"},
            {ID : 6, title: "This is a sample text which represents the title of a question"}
        ]
    };

    render() {
        return (
            <div>
                <QuestionFilter/>
                <Button color="light-blue-button" href="./add-question">Add new question</Button>
                {this.state.questions.map(question => <QuestionTitle key={question.ID} title={question.title}/>)}
            </div>
        )
    }
}