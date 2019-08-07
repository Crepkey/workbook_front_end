import React, {Component} from 'react'
import checkSymbol from '../static/check_symbol.png'
import repeatSymbol from '../static/repeat_symbol.png'


export default class QuestionRating extends Component {
    render() {
        return (
            <div>
                <input id="img-left"
                       alt="rI need to repeat that question later"
                       onClick={ () => window.location.href="/learning-mode" }
                       type="image" src={repeatSymbol}/>
                <input id="img-right"
                       alt="I know the answer to this question"
                       onClick={ () => window.location.href="/learning-mode" }
                       type="image" src={checkSymbol}/>
            </div>
        )
    }
};