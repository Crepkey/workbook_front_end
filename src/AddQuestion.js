import React, {Component} from 'react';
import './App.css';
import './components/button'
import Button from "./components/button";

export default class AddQuestion extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        let jsonData = {};

        for (const [key, value] of formData) {
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
                <h1 className="App-header">ADD NEW QUESTION</h1>

                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="questionText">Enter new question</label>
                        <textarea id="questionText" name="questionText"/>
                    </p>

                    <p>
                        <label htmlFor="answer">Enter the right answer</label>
                        <textarea id="answer" name="answer"/>
                    </p>

                    <p>

                        <label htmlFor="room">Choose room for the question</label>
                        <select id="room" name="room">
                            <option value="PROGBASICS">Progbasics</option>
                            <option value="WEB">Web</option>
                            <option value="OOP">OOP</option>
                            <option value="ADVANCED">Advanced</option>
                        </select>
                    </p>

                    <Button id="send-question" color="red-button">Send data!</Button>
                </form>
            </div>
        );
    }
}