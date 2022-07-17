import React from 'react';
import vector from 'assets/images/Navbar/Signin/Vector.svg';
import cart from 'assets/images/Navbar/Signin/cart.svg';
import menu from 'assets/images/Header/Vector.png';

function Signin() {
    return (
        <div className="signin">
            <img src={vector} alt="" className="headerIcon" />
            <p className="phone">(905) 766 9009</p>
            <img src={cart} alt="" className="headerIcon" />
            <p className="phone">Cart (0)</p>
            <button className="signinBtn">Sign In / Sign Up</button>
            <div className="menuDiv">
                <img src={menu} alt="" className="menu" />
                <img src={menu} alt="" className="menu" />
                <img src={menu} alt="" className="menu" />
            </div>
        </div>
    );
}

export default Signin;
