import React from 'react';
import Navbar from './Navbar/Navbar';
import Tours from './Tours/Tours';

function Header() {
    return (
        <div className="Header">
            <div className="backFon">
                <Navbar />
                <Tours />
            </div>
        </div>
    );
}

export default Header;
