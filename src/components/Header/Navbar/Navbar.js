import React from 'react';

import PricingOrder from './PricingOrder/PricingOrder';
import Signin from './Signin/Signin';

function Navbar() {
    return (
        <div className="Navbar">
            <PricingOrder />
            <Signin />
        </div>
    );
}

export default Navbar;
