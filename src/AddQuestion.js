import React, {Component} from 'react';
import './App.css';

export default class AddQuestion extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            questionText: 'YYYYYYYYY',
            answer: 'WHAT',
            tags: [
                'OOP',
                'JAVA'
            ],
            room: 'OOP'
        };


        fetch('http://localhost:8080/question/add', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*<label htmlFor="questionText">Enter new question</label>*/}
                {/*<input id="questionText" name="questionText" type="text" /><br/>*/}

                {/*<label htmlFor="answer">Enter the right answer</label>*/}
                {/*<input id="answer" name="answer" type="text" /><br/>*/}

                {/*<label htmlFor="room">Choose room for the question</label>*/}
                {/*<input id="room" name="room" type="text" /><br/>*/}

                <button>Send data!</button>
            </form>
        );
    }
}