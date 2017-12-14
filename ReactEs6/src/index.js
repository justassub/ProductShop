import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ProductListContainer} from './Products/ProductListContainer'
import {NavigationComponent} from './Navigation/NavigationComponent'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ProductListComponent } from './Products/ProductListcomponent';
import {AdminLogin} from './AdminLogins/AdminLogin'
import {ProductDetailsContainer} from './ProductDetails/ProductDetailsContainer'

import {AdminProductsContainer} from './AdminLogins/AdminProductsContainer'
import {AdminProductListComponent} from './AdminLogins/AdminProductsListComponent'
import {AddProductContainer} from './ProductAddAndEdit/AddProductContainer'

import { AddProductComponent } from './ProductAddAndEdit/AddProductComponent';
import {EditContainer} from "./ProductEdit/EditContainer";
import { EditComponent } from './ProductEdit/EditComponent';
import { UserProduct } from './PrekiuKrepselis/UserProduct';
import {UserListContainer} from './PrekiuKrepselis/UserListContainer'

ReactDOM.render((

      <BrowserRouter>
          <div className="container">
              <NavigationComponent />
              <Switch>
              <Route exact path="/products/:id" component={ProductDetailsContainer} />
              <Route exact path="/" component={ProductListContainer} />  
              <Route exact path="/products" component={ProductListContainer} />              
              <Route exact path="/admin" component={AdminLogin} />
              <Route exact path="/admin/products" component={AdminProductsContainer}/>
                   
              <Route exact path="/admin/products/new" component={AddProductContainer}/>    
              <Route exact path="/admin/products/:id" component={EditContainer}/>
              <Route exact path ="/user/products" component={UserListContainer}/>
              </Switch>
          </div>
      </BrowserRouter> ),
document.getElementById('root'));