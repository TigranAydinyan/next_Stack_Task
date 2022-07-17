import React from 'react';

function AdditionalElement({ photo, text }) {
    return (
        <div className="additionalElement">
            <img src={photo} alt="" className="addElemImg" />
            <p className="addElemPrice">
                <sup className="additinalDollar">$</sup>129
            </p>
            <p className="addElemText">{text}</p>
            <button className="addElemBtn">Add to order</button>
            <ul className="addElemUl">
                <li>24 hours delivery guarantee</li>
                <li>x20 HDR professional photos</li>
                <li>24 hours delivery guarantee</li>
            </ul>
            <button className="quickBtn">Quick preview</button>
        </div>
    );
}

export default AdditionalElement;
