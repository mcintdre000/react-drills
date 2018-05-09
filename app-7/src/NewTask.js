import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor(){
        super();

        this.state = {
            userInput: ''
        }
        this.addTask = this.addTask.bind(this);
    }

    updateUserInput(val) {
        this.setState({
            userInput: val
        });
    }

    addTask() {
        this.props.add( this.state.userInput )
        this.setState({ userInput: ''})
    }

    render(){
        return(
            <div>
                <input  value={ this.state.userInput } 
                        placeholder="Enter new task"
                        onChange={event => this.updateUserInput(event.target.value)}></input>
                <button onClick={ this.addTask }> Add </button>
            </div>
        );
    }
}