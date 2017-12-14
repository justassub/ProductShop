
import React from 'react';
import axios from 'axios'


export class ProductDetailsComponent extends React.Component{
    iKrepseli = (event) => {
        axios.post("http://localhost:8081/hello-world-calc1/produktai/buy/"+this.props.id)
        event.preventDefault();
      };

    render() {
        return (
            <div>
                <div className="thumbnail">                
                <img src={this.props.image} alt=""/>
                <h1>{this.props.id}</h1>
                <h3>{this.props.title}</h3>
                <h4>{this.props.image}</h4>
                <h4>{this.props.description}</h4>
                <p>{this.props.price} eurai </p>   
                <p>{this.props.quantity} quantity </p> 
                
                <button className="btn btn-success" onClick={this.iKrepseli} >To cart</button>
                <button className="btn btn-default" onClick={this.props.history.goBack} >Back</button>
            </div>
            </div>
        );
}
}