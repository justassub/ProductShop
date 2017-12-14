import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';



export var AdminLogin = (props) => {
    return (
        <form className='form-horizontal'>
            <div className="form-group">
                <label className="col-sm-2 control-label">Login Name</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="login" placeholder="Login"
                         />
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Password</label>
                <div className="col-sm-3">
                    <input type="password" className="form-control" id="password" placeholder="password"
                        />
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-3">

                    <NavLink to="/admin/products">
                    <button  type="login" className="btn btn-default" >
                    LOGIN</button></NavLink>
                </div>
            </div>
        </form>
    );
};