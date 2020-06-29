import React, {useState} from 'react';
//import './Login.css';
const Login = () =>{
    return(
        <div id="Login_container">
            <form id="Login_input">
            <div>
                <p id="Login_text">Manager Login</p>
                <div className="Login_div">
                <p>Username:</p>
                <input id="Login_username" class="Login_input" type="text"></input>
                <span className="separator"></span>
                </div>
                <div className="Login_div">
                <p>Password:</p>
                <input id="Login_password" class="Login_input" type="password"></input>
                <span className="separator"></span>
                </div>
                <input type="submit" id="Login_submit" value="Login"></input>
            </div>

            </form>
        </div>
    )
}
export default Login;