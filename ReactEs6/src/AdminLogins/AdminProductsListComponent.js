import React from 'react';
import {AdminProductsComponent} from './AdminProductsComponent';
import {NavLink} from 'react-router-dom';

export var AdminProductListComponent = (props) => {
    const products = props.products.map((product1,index) => {
        
         var cardComponent=   <AdminProductsComponent
                key={index}
                id={product1.id}                
                title={product1.title}
                image={product1.image}
                description={product1.description}
                price={product1.price}
                quantity={product1.quantity}
                history={props.history}

            />;
            return (cardComponent
            );
            
        
    });
    return (
        <div>
            <NavLink to="/admin/products/new">
            <button>ADD NEW PRODUCT</button></NavLink>

            

           
        <div>
            
            {products}
            </div>
        </div>
    );
};