import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {

    const [loginInfo, setLoginInfo] = useState("Login");

    return (
        <div className="header">
            <GiHamburgerMenu className="hambur" onClick={
                () => {
                    const ham = document.querySelector('.hambur');
                    const logo = document.querySelector('.logo');
                    const ele = document.querySelector('.navbar');
                    const nav = document.querySelector('.navitems');
                    const login = document.querySelector('.login');

                    if (window.getComputedStyle(ele).display === "none") {
                        ele.parentElement.style.flexDirection = "column";
                        ele.parentElement.style.padding = "15px";
                        ele.parentElement.style.height = "65vh";

                        ele.style.display = "flex";
                        ele.style.justifyContent = "center";

                        nav.style.flexDirection = "column";
                        nav.style.justifyContent = "flexEnd";

                        // ham.style.display = 'none';
                        logo.style.textAlign = "center";
                        login.style.justifyContent = "center";
                    }
                    else {
                        ele.style.display = "none";
                        ele.parentElement.style.height = "25vh";
                    }

                    console.log("Hello");
                }
            } />
            <h1 className="logo">ART SCHOOL .</h1>
            <div className="navbar">

                <ul className="navitems">
                    <li><Link to="/">Home</Link></li>
                    <li>About</li>
                    <li><Link to="/products">Products</Link></li>
                    <li>Downloads</li>
                    <li><Link to="/cart" >Cart <i className="fas fa-cart-plus" /></Link></li>
                </ul>

            </div>

            <div className="login">
                <i className="fa-solid fa-user" id="icon"></i>
                <span onClick={() => {
                    if (loginInfo === "Login") {
                        setLoginInfo("Logout");
                    }
                    else {
                        setLoginInfo("Login");
                    }
                }}>{loginInfo}</span>
            </div>
        </div>
    );
}

export default Header;