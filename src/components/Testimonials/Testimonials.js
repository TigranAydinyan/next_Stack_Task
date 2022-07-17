import React from 'react';
import Slider from 'react-slick';
import frame from 'assets/images/Testimonials/Frame.svg';
import person1 from 'assets/images/Testimonials/person1.svg';
import person2 from 'assets/images/Testimonials/person2.svg';
import TestimonialsElement from './TestimonialsElement/TestimonialsElement';

function Testimonials() {
    const settings = {
        scrollX: true,
        scrollY: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: 'center',
        centerMode: true,
        responsice: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className="testimonailsFluid">
            <h2 className="testimonialsTitle">Testimonials</h2>
            <div className="testimonails">
                <Slider {...settings}>
                    <TestimonialsElement name="John Smith" starCount="3" img={frame} />
                    <TestimonialsElement name="John Smith" starCount="4" img={person1} />
                    <TestimonialsElement name="John Smith" starCount="5" img={person2} />
                    <TestimonialsElement name="John Smith" starCount="3" img={frame} />
                    <TestimonialsElement name="John Smith" starCount="4" img={person1} />
                    <TestimonialsElement name="John Smith" starCount="5" img={person2} />
                </Slider>
                {/* <TestimonialsElement name="John Smith" starCount="3" img={frame} />
                <TestimonialsElement name="John Smith" starCount="4" img={person1} />
                <TestimonialsElement name="John Smith" starCount="5" img={person2} /> */}
            </div>
        </div>
    );
}

export default Testimonials;
