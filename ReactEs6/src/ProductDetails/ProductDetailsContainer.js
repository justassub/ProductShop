import React from 'react';
import axios from 'axios';

import {ProductDetailsListComponent} from "./ProductDetailsListComponent"

export class ProductDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { products: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8081/hello-world-calc1/produktai/'+this.props.match.params.id)
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <ProductDetailsListComponent products={this.state.products}  history={this.props.history} />
    }
}