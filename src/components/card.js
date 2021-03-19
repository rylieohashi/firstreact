import React, { Component } from 'react';
import Content from './content';

import Input from './input';

const INITIAL_STATE = {
    yourName: '',
    contentVisible: false
}

class Card extends Component {

    constructor() {
        super()
            this.state = INITIAL_STATE;

            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if(this.state.contentVisible) {
            this.setState (INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true})
        }
    }

    render() {

        const inputData = [
            {title: '', state: this.state.yourName, name: 'yourName'}
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                { 
                    inputData.map((data) => {
                        return Input( (data), this.handleInputChange)
                    })
                }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Who are you' : 'Good Bye'}</button>
                {
                  this.state.contentVisible ? <Content data={this.state}/> : <div></div>
                }
        </form>
        )
    }
}

export default Card;