import React, {Component} from 'react';
import '../App.css';
import QuestionForm from "../components/QuestionForm";

export default class AddQuestion extends Component {

    render() {
        return (
            <QuestionForm
                apiAddress="http://localhost:8080/question/add"
                formTitle="Add New Question"
                questionFieldLabel="Add a new question"
                rightAnswerFieldLabel="Type the right answer here"
                wrongAnswersFieldsLabel="Type a wrong answer here (optional)"
                tagsDropdownLabel="Select tags"
                roomDropdownLabel="Select the room"
                submitButtonText="Save"
            />
        );
    }
}