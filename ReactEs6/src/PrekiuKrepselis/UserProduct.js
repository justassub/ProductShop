import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


export class UserProduct extends React.Component  {    

    DeleteProduct = (event) => {
        axios.get("http://localhost:8081/hello-world-calc1/produktai/user/cart/remove/"+this.props.id)
           
      };

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
                       
                    <NavLink to={"/admin"}>
                  <button className="btn btn-default" onClick={this.DeleteProduct} >
                  REMOVE PRODUCT FROM LIST</button></NavLink>
                           
                </div>
               
            </div>
        );
    }

};