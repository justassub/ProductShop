import {NavLink} from 'react-router-dom';
import React from 'react';
import axios from 'axios'

const buttonCollor = {
    color:'red'
};

export class AdminProductsComponent extends React.Component  {    
  //DELETE BUTTON
  DeleteProduct = (event) => {
    axios.delete("http://localhost:8081/hello-world-calc1/produktai/"+this.props.id)
    event.preventDefault();
       
  };

  

   



render(){
  
  return (
    
     <div className="col-xs-12 col-sm-4 text-center">
                  <div className="thumbnail">                
                  <img src={this.props.image} alt=""/>
                  <h1>{this.props.id}</h1>
                  <h3>{this.props.title}</h3>
                  <h4>{this.props.description}</h4>
                  <p>{this.props.price} eurai </p>   
                  <p>{this.props.quantity} quantity </p>    
                  <NavLink to={"/admin/products/"+this.props.id}>  
                  <button  className="btn btn-default" onClick={this.getProduct} >
                  EDIT FILE</button></NavLink>
                  <NavLink to={"/admin"}>
                  <button style={buttonCollor} className="btn btn-default" onClick={this.DeleteProduct} >
                  REMOVE PRODUCT FROM LIST</button></NavLink>
                  
              </div>
          </div>
      );
  }

};