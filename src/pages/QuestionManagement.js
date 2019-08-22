import React, {Component} from 'react';

/*Components*/

import QuestionFilter from "../components/QuestionFilter";
import Button from "../components/Button";
import QuestionTitle from "../components/QuestionTitle";


export default class QuestionManagement extends Component{

    state={
        questions : []
    };


    componentDidMount() {
        let url = 'http://localhost:8080/question/random-question-list';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ window.sessionStorage.accessToken
            }
        })
            .then(response => response.json())
            .then(data => this.setState({questions:data }))
            .catch(error => {
                this.setState({error});
            })
    }


    render() {
        return (
            <div>
                <h1>Question Managment</h1>
                <QuestionFilter/>

                <Button color="light-blue-button" href="/add-question">Add new question</Button>

                {this.state.questions.map(question => <QuestionTitle key={question.questionID} question={question}/>)}
            </div>
        )
    }
}