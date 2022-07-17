import React from 'react';
import Slider from 'react-slick';
import photoImg from '../../assets/images/Sidebar/Frame_3.svg';
import personImg from '../../assets/images/Sidebar/Frame_4.svg';
import matterImg from '../../assets/images/Sidebar/matterport.svg';
import dronImg from '../../assets/images/Sidebar/Frame_1.svg';
import AdditionalElement from './AdditionalElement/AdditionalElement';

function AdditionalServices() {
    const settings = {
        scrollX: true,
        scrollY: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        className: 'center',
        centerMode: true,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="AdditionalServices">
                <h2 className="additionalServTitle">Additional services</h2>
                <p className="servicesDescription">
                    Customize your experience by adding any additional services
                    <br /> to any Package
                </p>
                <div>
                    <Slider {...settings}>
                        <AdditionalElement photo={photoImg} text="Twilight Photography" />
                        <AdditionalElement photo={personImg} text="Agent Video Presentati(hover)" />
                        <AdditionalElement photo={matterImg} text="Matterport" />
                        <AdditionalElement photo={dronImg} text="Drone" />
                        <AdditionalElement photo={photoImg} text="Twilight Photography" />
                        <AdditionalElement photo={personImg} text="Agent Video Presentati(hover)" />
                        <AdditionalElement photo={matterImg} text="Matterport" />
                        <AdditionalElement photo={dronImg} text="Drone" />
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default AdditionalServices;
