import {AddProductComponent} from './AddProductComponent'
import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';


export class AddProductContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            description: '',
            price: 0,
            quantity: 0,
            history: props.history
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [name]: value
            }
        );
};

        handleClick = (event) => {
            const outputProduct = {
            title: this.state.title,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price,
            quantity: this.state.quantity
    };
    
    axios.post("http://localhost:8081/hello-world-calc1/produktai", outputProduct)
        .then((response) => {
            this.setState( {
                title: '',
                image: '',
                description: '',
                price: 0,
                quantity: 0
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

render() {
    return (
        <div>
            <AddProductComponent
                title={this.state.title}
                image={this.state.image}
                description={this.state.description}
                price={this.state.price}
                quantity={this.state.quantity}
                onChange={this.handleChange}
                onClick={this.handleClick}
                history={this.state.history}
            />
        </div>
    );
}
}
