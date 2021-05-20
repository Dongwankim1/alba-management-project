import React from 'react';
import './SignUp.css';

import {Link} from 'react-router-dom';

const SignUp = () =>{

    return (
        <form className="SignUpForm">
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>name</label>
            <input type="text" className="form-control" placeholder="Name" />
        </div>

        <div className="form-group">
            <label>birth</label>
            <input type="text" className="form-control" placeholder="Birth" />
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm password" />
        </div>

        <button type="submit" className="SignUpbtn">Sign Up</button>
        
        <p className="forgot-password text-right">
            Already registered <Link to="/">sign in?</Link>
        </p>
    </form>
    )

}

export default SignUp;