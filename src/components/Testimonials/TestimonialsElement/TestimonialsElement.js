import React, { useState } from 'react';
import star from 'assets/images/Testimonials/Vector.svg';

function TestimonialsElement({ name, starCount, img }) {
    const [more, setMore] = useState(true);
    const arr = [];
    for (let i = 0; i < starCount; i++) {
        arr.push(i);
    }
    return (
        <div className="testimonalsElement">
            <div className="personIcon">
                <img src={img} alt="" className="testiImg" />
            </div>
            <div className="personDescription">
                <h3 className="personName">{name}</h3>
                <p className="lorem">Lorem Ipsum</p>
                <div className="starDiv">
                    {arr.map((v) => (
                        <img src={star} alt="" className="star" key={v} />
                    ))}
                </div>
                <p className="loremtext">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard dummy text
                    <span
                        className="more"
                        style={{
                            display: more ? 'none' : 'inline',
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard
                    </span>{' '}
                    <button className="moreLessBtn" onClick={() => setMore(!more)}>
                        {more ? 'more' : 'less'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default TestimonialsElement;
