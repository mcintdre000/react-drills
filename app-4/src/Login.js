import React, { Component } from 'react';

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            userName: "",
            passWord: ""
        };
        
        this.loginAlert = this.loginAlert.bind(this);
    }

    updateUserName(name) {
        this.setState({
            username: name,
        });    
    }
    updatePassWord(pass) {
        this.setState({
            password: pass
        });
    }

    loginAlert() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }
    render(){
        return(
            <div>
                <input className="inputBox" onChange={ event => this.updateUserName(event.target.value)}></input>
                <input className="inputBox" onChange={ event => this.updatePassWord(event.target.value)}></input>
                <button onClick={ this.loginAlert }> Login </button>
            </div>
        )
    }
}