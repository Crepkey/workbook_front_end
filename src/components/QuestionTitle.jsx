import React, { Component} from "react";
import Button from "./button";

export default class QuestionTitle extends Component{

    render() {
        return(
            <div className="question-title-border">
                <h3>
                    <span id="title">
                        {this.props.question.questionText}
                    </span>
                </h3>
                <Button id="edit-button" color = "red-button" href={"./edit-question" + "/" + this.props.question.questionID}>
                    Edit
                </Button>
            </div>
        )
    }
}