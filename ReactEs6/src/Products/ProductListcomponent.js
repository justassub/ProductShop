import React from 'react';
import {ProductComponent} from './ProductComponent';


export var ProductListComponent = (props) => {
    const products = props.products.map((product1,index) => {
        
         var cardComponent=   <ProductComponent
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
            {products}
        </div>
    );
};