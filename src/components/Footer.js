import React from 'react';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='shift'>
                <div className='left'>
                    <img src='/images/logo.svg' className='img'  alt=""/>
                <div className='left-image'>
                    <img src='/images/icon-facebook.svg' className='footer-image' alt="" />
                    <img src='/images/icon-youtube.svg' className='footer-image' alt="" />
                    <img src='/images/icon-Twitter.svg' className='footer-image' alt="" />
                    <img src='/images/icon-pinterest.svg' className='footer-image' alt=""/>
                </div>
                </div>
                <div className='center'>
                <div className='first'>
                  <p>About Us</p>
                  <p>Contact</p>
                  <p>Blog</p>
                </div>
                <div className='second'>
                  <p>Careers</p>
                  <p>Support</p>
                  <p>Privacy Policy</p>
                </div>
                </div>
                <div className='right'>
                <p className = 'invite'>Request Invite</p>
                <p className='reserve'>@ Easybank All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;