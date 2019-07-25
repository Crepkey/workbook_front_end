import React, {Component} from 'react';
import './App.css';

export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            questionID: null,
            error: null
        }
    }

    buildList =(data)=>{
        console.log(data);
        this.setState({questionID: data.questionID})
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
                        this.state.list.length === 0 &&
                        <li>Sorry No data available</li>
                    }
                    { this.state.list.length > 0 &&
                        <li>{this.state.list}</li>

                    }
                </ul>
                {this.state.error &&
                <h3>{this.state.error}</h3>
                }
            </div>
        )
    }
}
