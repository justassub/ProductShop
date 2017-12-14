import React from 'react';
import axios from '../../node_modules/axios';
import {AdminProductsListComponent, AdminProductListComponent} from './AdminProductsListComponent'
import {NavLink} from 'react-router-dom';
export class AdminProductsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8081/hello-world-calc1/produktai')
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <AdminProductListComponent products={this.state.products}  />
    }
}