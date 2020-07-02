import React from 'react';
import './NavBar_manage.css';
import {Link} from 'react-router-dom'
import check from '../image/manage/check.png'

const NavBar_manage = () => {
    return(
        <div id="NavBar_manage_container">
            <ul className="NavBar_manage_ul">
                <li className="NavBar_manage_li">
                    <Link to="/manage/SellerCheck">
                        <img src={check} alt="check"/>
                        <p style={{color:"#FFB8BA"}}>SellerCheck</p>
                    </Link>
                </li>
                {/* <li className="NavBar_manage_li">
                    <Link to="/BuyBook">
                        {/* <img src={} alt="buybook_icon"/> 
                        <p style={{color:"#E8B77B"}}>BuyBook</p>
                    </Link>
                </li>
                <li className="NavBar_manage_li">
                    <Link to="/SellBook">
                        {/* <img src={} alt="SellBook_icon"/> 
                        <p style={{color:"#FFFA94"}}>SellBook</p>
                    </Link>
                </li>
                <li className="NavBar_manage_li">
                    <Link to="/FeedBack">
                        {/* <img src={} alt="Feedback_icon"/> 
                        <p style={{color:"#7BE88A"}}>FeedBack</p>
                    </Link>
                </li>
                <li className="NavBar_manage_li">
                    <Link to="/Login">
                        {/* <img src={} alt="Login_icon"/> 
                        <p style={{color:"#9CEAFF"}}>Login</p>
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default NavBar_manage;