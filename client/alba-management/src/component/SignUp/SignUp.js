import React, { useState } from 'react';
import './SignUp.css';
import {useDispatch,useSelector} from "react-redux";

import {Link, Redirect} from 'react-router-dom';
import { register } from "../../actions/auth"


const SignUp = ({history}) =>{
    const [Email,setEmail]  = useState("");
    const [Password,setPassword] = useState("");
    const [Name,setName] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");
    const [birth,setBirth] = useState("");
    const [successful,setSuccessful] = useState(false);

    const {message} = useSelector(state=>state.message);
    const dispatch = useDispatch();

    const onEmailHandler = (e) =>{
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e)=>{
        setPassword(e.currentTarget.value);
    }

    const onNameHandler = (e)=>{
        setName(e.currentTarget.value);
    }

    const onconfirmPasswordHandler = (e)=>{
        setconfirmPassword(e.currentTarget.value);
    }

    const onbirthHandler  = (e)=>{
        setBirth(e.currentTarget.value);
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();

        setSuccessful(false);
        if(Password !==confirmPassword){
            return alert('비밀번호와 비밀번호 확인은 같아야합니다.');
        }



        dispatch(register(Name,birth,Email,Password,['user'])).then(()=>{

            //setSuccessful(true);
            console.log(history);
            history.push('/');
        }).catch(()=>{
            console.log("asdqwd1211122");
            setSuccessful(false);
        })


    }

    return (
        <form className="SignUpForm" onSubmit={onSubmitHandler}>
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>name</label>
            <input type="text" className="form-control" placeholder="Name" onChange={onNameHandler}  value={Name}/>
        </div>

        <div className="form-group">
            <label>birth</label>
            <input type="text" className="form-control" placeholder="Birth" onChange={onbirthHandler} value={birth} />
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={onEmailHandler} value={Email}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={onPasswordHandler} value={Password} />
        </div>

        <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm password" onChange={onconfirmPasswordHandler} value={confirmPassword}/>
        </div>

        <button type="submit" className="SignUpbtn">Sign Up</button>
        {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>)}
        <p className="forgot-password text-right">
            Already registered <Link to="/">sign in?</Link>
        </p>
    </form>
    )

}

export default SignUp;