import React from 'react';
import vector from 'assets/images/lastUpdates/Vector.svg';
import image from 'assets/images/lastUpdates/image.png';

function LastUpdates() {
    return (
        <div className="lastUpdates">
            <div className="lastImgDiv">
                <img src={image} alt="" className="lastImg" />
                <div className="slidLastUpdates">
                    <img src={vector} alt="" className="vectorToLeft" />
                    <p className="imageNumber">
                        01/<span className="lastImageNumber">04</span>
                    </p>
                    <img src={vector} alt="" className="vectorToRight" />
                </div>
            </div>
            <div className="newServices">
                <div>
                    <h2 className="lastUpdatesTitle">last updates</h2>
                    <img src={image} alt="" className="lastImgNone" />
                    <div className="lastUpdDesc">
                        <h6 className="lastUpdatesSubtitle">
                            New Service | VIRTUAL STAGING | <br className="br" />
                            starting at $45/photo
                        </h6>
                        <p className="lastUpdatesText">
                            We are very excited to offer our VIRTUAL STAGING service To help our
                            clients adapt to the fast-changing environment of today’s Real Estate
                            Market and bring the best possible value proposition to your listings
                            marketing. 2 days Turnaround Beautiful Ultra-Realistic Interiors Design
                            that compliments your space We can work with both Empty and Furnished
                            spaces
                        </p>
                        <button className="discoverBtn">Discover more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastUpdates;
