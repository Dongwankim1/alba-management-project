import React from 'react';
import './Join.css';
import {Link} from 'react-router-dom';
import { FaGoogle,FaFacebook } from 'react-icons/fa';


const Join = () =>{
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
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"/>
                    <Link>Forgot your password?</Link>
                    <button className="JoinBtn">Sign In</button>
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