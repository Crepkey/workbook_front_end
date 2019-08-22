import React, {Component} from 'react';
import Button from "./button";

export default class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            apiAddress: this.props.apiAddress,
            formTitle: this.props.formTitle,
            questionFieldLabel: this.props.questionFieldLabel,
            rightAnswerFieldLabel: this.props.rightAnswerFieldLabel,
            wrongAnswersFieldsLabel: this.props.wrongAnswersFieldsLabel,
            tagsDropdownLabel: this.props.tagsDropdownLabel,
            roomDropdownLabel: this.props.roomDropdownLabel,
            submitButtonText: this.props.submitButtonText
        }
    }

    componentDidMount() {
        console.log(this.state.apiAddress)
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        let jsonData = {};

        let answers = [];
        let tags = [];

        for (const [key, value] of formData) {
            console.log(key + ":" + value);
            if (key === "rightAnswerText") {
                answers.push(
                    {"answerText": value, "rightAnswer": true}
                )
            }
            else if (key === "answerText") {
                answers.push(
                    { "answerText": value, "rightAnswer": false}
                )
            }
            else if (key === "tags") {
                tags.push(value)
            }
            jsonData[key] = value;
        }

        jsonData["answers"]=answers;
        jsonData["tags"]=tags;
        console.log(jsonData);

        fetch(this.state.apiAddress, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ window.sessionStorage.accessToken
            },

            body: JSON.stringify(jsonData)
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error))
    };

    render() {
        return (
            <div>
                <h1 className="App-header">{this.state.formTitle}</h1>

                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="questionText">{this.state.questionFieldLabel}</label>
                        <textarea id="questionText" name="questionText"/>
                    </p>
                    {/*Right answer*/}
                    <p>
                        <label htmlFor="answer">{this.state.rightAnswerFieldLabel}</label>
                        <textarea id="rightAnswer" name="rightAnswerText"/>
                    </p>
                    {/*Wrong answer 1*/}
                    <p>
                        <label htmlFor="answer">{this.state.wrongAnswersFieldsLabel}</label>
                        <textarea id="wrongAnswer-1" name="answerText"/>
                    </p>
                    {/*Wrong answer 2*/}
                    <p>
                        <label htmlFor="answer">{this.state.wrongAnswersFieldsLabel}</label>
                        <textarea id="wrongAnswer-2" name="answerText"/>
                    </p>
                    {/*Wrong answer 3*/}
                    <p>
                        <label htmlFor="answer">{this.state.wrongAnswersFieldsLabel}</label>
                        <textarea id="wrongAnswer-3" name="answerText"/>
                    </p>
                    {/*Tags*/}
                    <p>
                        <label htmlFor="room">{this.state.tagsDropdownLabel}</label>
                        <select id="tags" name="tags">
                            <option value="JAVA">JAVA</option>
                            <option value="OOP">OOP</option>
                            <option value="PYTHON">PYTHON</option>
                            <option value="WEB">WEB</option>
                        </select>
                    </p>
                    {/*Rooms*/}
                    <p>
                        <label htmlFor="room">{this.state.roomDropdownLabel}</label>
                        <select id="room" name="room">
                            <option value="PROGBASICS">Progbasics</option>
                            <option value="WEB">Web</option>
                            <option value="OOP">OOP</option>
                            <option value="ADVANCED">Advanced</option>
                        </select>
                    </p>

                    <Button id="send-question" color="red-button">{this.state.submitButtonText}</Button>
                </form>
            </div>
        );
    }
}