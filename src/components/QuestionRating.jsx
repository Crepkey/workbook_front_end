import React, {Component} from 'react'
import checkSymbol from '../static/check_symbol.png'
import repeatSymbol from '../static/repeat_symbol.png'


export default class QuestionRating extends Component {
    render() {
        return (
            <div>
                <input id="img-left"
                       onClick={ () => window.location.href="/learning-mode" }
                       type="image" src={repeatSymbol}/>
                <input id="img-right"
                       onClick={ () => window.location.href="/learning-mode" }
                       type="image" src={checkSymbol}/>
            </div>
        )
    }
};