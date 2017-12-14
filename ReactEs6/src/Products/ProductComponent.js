import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';



export class ProductComponent extends React.Component  {    
    

render(){
    
    return (
       <div className="col-xs-12 col-sm-4 text-center">
       
                    <div className="thumbnail">                
                    <img src={this.props.image} alt=""/>

                    <h2>{this.props.id}</h2>
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.description}</h4>
                    <p>{this.props.price} eurai </p>   
                    <p>{this.props.quantity} quantity </p>    
                    <NavLink to={"/products/"+this.props.id}>  
                    <button  className="btn btn-default" onClick={this.getProduct} >
                    DETAILS</button></NavLink>
                </div>
            </div>
        );
    }

};