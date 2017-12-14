import React from 'react';
import axios from '../../node_modules/axios';
import {UserList} from './UserList'

export class UserListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8081/hello-world-calc1/produktai/user/cart')
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <UserList products={this.state.products}  />
    }
}