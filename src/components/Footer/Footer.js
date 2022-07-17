import React from 'react';
import phone from 'assets/images/Footer/phone.png';
import clock from 'assets/images/Footer/clock.png';
import linkedIn from 'assets/images/Footer/linkedIn.png';
import instagram from 'assets/images/Footer/instagram.png';
import facebook from 'assets/images/Footer/facebook.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footerItem">
                <ul className="footerItemUl">
                    <li>services</li>
                    <li>pricing</li>
                    <li>order a tour</li>
                    <li>sign in / sign up</li>
                </ul>
            </div>
            <div className="footerItem2">
                <ul className="footerItemUl">
                    <li className="getInTouch">get in touch</li>
                    <li>
                        <img src={phone} alt="" className="phoneIcon" />
                        (000) 000 0000
                    </li>
                    <li>
                        <img src={clock} alt="" className="phoneIcon" />
                        10:00 АМ - 18:00 PM
                    </li>
                    <li>
                        <img src={linkedIn} alt="" className="socialIcon" />
                        <img src={instagram} alt="" className="socialIcon" />
                        <img src={facebook} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
