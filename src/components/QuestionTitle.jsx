import React, { Component} from "react";

export default class QuestionTitle extends Component{
    render() {
        return(
            <div className="question-title-border">
                <h3>
                    {this.props.title}
                </h3>
            </div>
        )
    }
}