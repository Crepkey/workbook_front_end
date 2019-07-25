import React, {Component} from 'react';
import './App.css';

export default class questionTransporter extends Component{

    constructor(){
        super();
        this.state = {
            questionID: null,
            questionText: null,
            answer: null,
            tags: null,
            room: null,
            hint: false,
            error: null
        }
    }

    showHINT = () => {
        this.setState({hint: true});
    };

    buildState =(data)=>{
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
            .then(this.buildState)
            .catch(error => {
                this.setState({error});
            })
    }

    render(){
        console.log('render');
        return (
            <div>
                <h1>LEARNING MODE</h1>

                    {
                        this.state.error !== null &&
                        <div>Sorry No data available</div>
                    }
                    {
                        this.state.questionText !== null &&
                        <div>{this.state.questionText}</div>
                    }
                    <div><p><button type="button" onClick={this.showHINT}>Click here for HINT</button></p></div>
                    {
                        this.state.hint === true &&
                        <div>{this.state.answer}</div>
                    }
                {this.state.error &&
                <h3>{this.state.error}</h3>
                }
            </div>
        )
    }
}
