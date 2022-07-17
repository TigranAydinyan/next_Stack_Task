import React from 'react';
// import vector from '../../../assets/images/Navbar/PricingOrder/Vector.svg'
import vector from '../../../../assets/images/Navbar/PricingOrder/Vector.svg';

function PricingOrder() {
    return (
        <div className="pricingOrder">
            <ul className="ul">
                <li className="pricing">pricing</li>
                <li>order a tour</li>
                <li className="services">services</li>
            </ul>
            <img
                src={vector}
                alt=""
                style={{
                    marginLeft: '5px',
                }}
            />
        </div>
    );
}

export default PricingOrder;
