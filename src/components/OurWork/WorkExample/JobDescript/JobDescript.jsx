import React from 'react';
import vector from '../../../../assets/images/JobDescipt/Vector.svg';

function JobDescript() {
    return (
        <div className="jobDescript">
            <div className="priceStarting">
                <p className="start">Starting</p>
                <span className="minPrice">
                    99<sup className="dollar">$</sup>
                </span>
            </div>
            <h2 className="videoTitle">REAL ESTATE CINEMATIC VIDEO</h2>
            <p className="videoDescription">
                Video is THE most effective content type in today&apos;s digital marketing
                environment. We offer a truly CUSTOM Video production for Real Estate, from music
                selection to editing style, every detail will be created to best showcase your
                property. On average, 2 -4 min, dynamic Cinematic Experience is THE most effective
                way to create strong engagement and generate leads. Delivery: NEXT DAY.
            </p>
            <div
                style={{
                    display: 'flex',
                    marginTop: '40px',
                }}
            >
                <button className="orderBtn">Order now</button>
                <button className="videoWatchBtn">
                    <img src={vector} alt="" style={{ marginRight: '10px' }} />
                    How it works
                </button>
            </div>
        </div>
    );
}

export default JobDescript;
