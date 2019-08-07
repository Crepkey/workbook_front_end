import React, {Component} from 'react';
import '../App.css';
import QuestionForm from "../components/QuestionForm";

export default class EditQuestion extends Component {


    render() {
        return (
            <QuestionForm
                apiAddress="http://localhost:8080/question/add"
                formTitle="Edit Question"
                questionFieldLabel="Question"
                rightAnswerFieldLabel="Right answer"
                wrongAnswersFieldsLabel="Edit wrong answer here"
                tagsDropdownLabel="Select tags"
                roomDropdownLabel="Room"
                submitButtonText="Save"
            />
        );
    }
}