import React, { Component } from 'react';

export default class Button extends Component {
    state = {
        id: this.props.id,
        href: this.props.href,
        color: this.props.color

    };

    linkToHref = () =>{
        if( this.state.href !== undefined){
            window.location.href=this.state.href
        }
        else{
            let newHref = window.location.href;
            window.location.href= newHref
        }
    };

    render() {
        return(
            <p>
                <button id={this.state.id} className={this.state.color} onClick={this.linkToHref}>{this.props.children}</button>
            </p>
        )
    }
};