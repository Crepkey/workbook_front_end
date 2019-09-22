import React from 'react';

import '../static/css/App.css';
import QuestionForm from "../components/QuestionForm";

export default class EditQuestion extends React.Component {
    render() {
        return (
            <QuestionForm
                apiAddress={"http://localhost:8080/question/id/"}
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