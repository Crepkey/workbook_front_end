import React, {Component} from 'react';
import Button from "./button";

export default class QuestionForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            apiAddress: this.props.apiAddress,
            formTitle: this.props.formTitle,
            questionFieldLabel: this.props.questionFieldLabel,
            answerFieldLabel: this.props.answerFieldLabel,
            roomDropdownLabel: this.props.roomDropdownLabel,
            submitButtonText: this.props.submitButtonText
        }
    }

    handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        let jsonData = {};

        for (const [key, value] of formData) {
            jsonData[key] = value;
        }

        fetch(this.state.apiAddress, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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

                    <p>
                        <label htmlFor="answer">{this.state.answerFieldLabel}</label>
                        <textarea id="answer" name="answer"/>
                    </p>

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