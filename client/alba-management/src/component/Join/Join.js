import React, { useEffect, useState } from 'react';
import './Join.css';
import {Link, Redirect} from 'react-router-dom';
import { FaGoogle,FaFacebook } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { login } from "../../actions/auth"

const Join = (props) =>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const {isLoggedIn} = useSelector(state => state.auth);
    const {message} = useSelector(state => state.message);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(isLoggedIn){
            console.log(isLoggedIn)
            props.history.push("/main");
        }
    },[])
    const onChangeEmail= (e)=>{
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e)=>{
        const password = e.target.value;
        setPassword(password)
    }

    const handleLogin = (e) =>{
        e.preventDefault();

        setLoading(true);

        
        dispatch(login(email,password)).then(
            ()=>{
                props.history.push("/main");
                window.location.reload();
            }
        ).catch(()=>{
            setLoading(false);
        })

    }

    

    return (
       <div className="JoinContainer">
           <div className="JoinFormContainer log-in-container">
                <form className="JoinForm">
                    <h1>Login</h1>
                    <div className="JoinSocialContainer">
           

                        <Link><FaGoogle/></Link>
                        <Link><FaFacebook/></Link>
                    </div>
                    <span>or use your acount</span>
                    <input type="email" placeholder="Email" onChange={onChangeEmail} value={email}></input>
                    <input type="password" placeholder="Password" onChange={onChangePassword} value={password}/>
                    <Link>Forgot your password?</Link>
                    <button className="JoinBtn" onClick={handleLogin}>Sign In</button>
                    <button className="JoinBtn"><Link to="/signup">Sign Up</Link></button>
                </form>

           </div>
           <div className="JoinOverlayContainer">
                <div className="JoinOverlay">
                    <div className="JoinOverlayPanel overlay-right">
                        <h1>응또와</h1>
                        <p>알바 관리 시스템</p>
                    </div>
                </div>

           </div>
       </div>
    )
}

export default Join;