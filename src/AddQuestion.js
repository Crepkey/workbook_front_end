import React, {Component} from 'react';
import './App.css';

export default class AddQuestion extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        let jsonData = {};

        for (const [key, value]  of formData) {
            jsonData[key] = value;
        }

        fetch('http://localhost:8080/question/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(jsonData)
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error))
    }

    render() {
        return (
            <div>
            <p>
                <h1 className="App-header">ADD NEW QUESTION</h1>
            </p>
            <form onSubmit={this.handleSubmit}>
                <p><label htmlFor="questionText">Enter new question</label><br/>
                <textarea id="questionText" name="questionText"/></p>

                <p><label htmlFor="answer">Enter the right answer</label><br/>
                <textarea id="answer" name="answer"/></p>

                <p><label htmlFor="room">Choose room for the question</label><br/>
                <select id="room" name="room">
                    <option value="PROGBASICS">Progbasics</option>
                    <option value="WEB">Web</option>
                    <option value="OOP">OOP</option>
                    <option value="ADVANCED">Advanced</option>
                </select></p>

                <button id="send-question">Send data!</button>
            </form>
            </div>
        );
    }
}