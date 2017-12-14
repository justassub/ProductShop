import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export var AddProductComponent =(props)=>{

    return(
        <form >
            <div>
                <p>Title - Can not be null! Only english letters were tested</p>
                <div>
                <input type="text" className="form-control" id="title" placeholder="Title" value={props.title}
                           onChange={props.onChange}/>
                </div>
            </div>
            

            <div>
                <p>Image</p>
                <div>
                <input type="text" className="form-control" id="image" placeholder="Image URL" value={props.image}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div>
                <p>Description</p>
                <div>
                <input type="text" className="form-control" id="description" placeholder="Description" value={props.description}
                           onChange={props.onChange}/>
                </div>
            </div>


            <div>
                <p>Price</p>
                <div>
                <input type="text" className="form-control" id="price" placeholder="Price" value={props.price}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div>
                <p>Quantity</p>
                <div>
                <input type="text" className="form-control" id="quantity" placeholder="Quantity" value={props.quantity}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div >
                <div >
                  
                    <button type="submit"  onClick={props.onClick}>Save</button>
                    <button type="submit"  onClick={props.history.goBack}>Cancel</button>
                </div>
            </div>
</form>





    )
}

AddProductComponent.PropTypes={
    title:PropTypes.string.isRequired
    
};