import React from 'react';
import FooterNavTwo from './FooterNavTwo';

const FooterNav = () => {
    return (
        <div>
            <div className="leftPart">
                <p className='footerNavCom'>Company</p>
                <p>About Us</p>
                <p>How we operate</p>
                <p>Blog</p>
                <p>Careers</p>
            </div>
            <FooterNavTwo />
        </div>
    );
}

export default FooterNav;