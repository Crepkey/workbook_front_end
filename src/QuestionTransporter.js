import React, {Component} from 'react';
import './App.css';

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            questionID: null,
            questionText: null,
            answer: null,
            tags: null,
            room: null,
            error: null
        }
    }

    buildList =(data)=>{
        console.log(data);
        this.setState({questionID: data.questionID});
        this.setState({questionText: data.questionText});
        this.setState({answer: data.answer});
        this.setState({tags: data.tags});
        this.setState({room: data.room});
    };

    componentDidMount(){
        console.log('did mount');
        let url = 'http://localhost:8080/question/random';
        fetch(url)
            .then(response => response.json())
            .then(this.buildList)
            .catch(error => {
                this.setState({error});
            })
    }

    render(){
        console.log('render');
        return (
            <div>
                <h1>This is HOME</h1>
                <ul>
                    {
                        this.state.error !== null &&
                        <li>Sorry No data available</li>
                    }
                    {
                        this.state.questionID !== null &&
                        <li>{this.state.questionID}</li>
                    }
                    {
                        this.state.questionText !== null &&
                        <li>{this.state.questionText}</li>
                    }
                    {
                        this.state.answer !== null &&
                        <li>{this.state.answer}</li>
                    }
                    {
                        this.state.tags !== null &&
                        <li>{this.state.tags}</li>
                    }
                    {
                        this.state.room !== null &&
                        <li>{this.state.room}</li>
                    }
                </ul>
                {this.state.error &&
                <h3>{this.state.error}</h3>
                }
            </div>
        )
    }
}
