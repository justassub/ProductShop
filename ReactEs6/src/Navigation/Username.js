import React, {Component} from 'react';
import {injector} from 'react-services-injector';
import axios from 'axios'


class UsernameContainer extends Component {
    JungtisKaip = (event) => {
        axios.post("http://localhost:8081/hello-world-calc1/produktai/user/"+this.state.name)
        event.preventDefault();
      };
   

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState( {name : event.target.value});
    }

    handleSubmit = (event) => {
        const {User} = this.services;
        User.changeUser(this.state.name);
        this.setState( {name : User.currentUser});  
        event.preventDefault();
    }

    render() {
        return (
            
            <form  onSubmit={this.handleSubmit}>
                <div >
                <button onClick ={this.JungtisKaip}> Jungtis kaip </button>
                    <input  placeholder="Username" value={this.state.name} onChange={this.handleChange}/>
                </div>
            </form>
        );
    }
}

export default injector.connect(UsernameContainer);