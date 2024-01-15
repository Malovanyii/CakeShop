import React from 'react';
import CustomButton from '../../shared/CustomButton/CustomButton';
import location_pin from '../../images/icons/location_pin.svg';
import instagram_black from '../../images/icons/instagram_black.svg';
import youtube_black from '../../images/icons/youtube_black.svg';
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__shop">
                <a href='/' className='footer__shop__logo'>
                    MyCake
                </a>
                <div className="footer__shop__country">
                    <CustomButton icon={location_pin} text='Вся Україна' styles='pink_light' />
                </div>
            </div>
            <nav className='footer__nav'>
                <a className='footer__nav__item link' href='/'>Десерти</a>
                <a className='footer__nav__item link' href='/'>Кращі кондитери</a>
                <a className='footer__nav__item link' href='/'>Корисні статті</a>
            </nav>
            <div className="footer__contacts">
                <div className="footer__contacts__button">
                    <CustomButton text='Правила користування' icon='' styles='transparent white_transparent' />
                    <CustomButton text='Форма зворотнього зв’язку' icon='' styles='white' />
                </div>
                <div className="footer__contacts__networks">
                    <div className="footer__contacts__networks__copyright">
                        <p className='copyright'>© Mycake 2022</p>
                        <p className='text'>All rights reserved</p>
                    </div>
                    <div className="footer__contacts__networks__links">
                        <a href="/">
                            <img src={instagram_black} alt="#" />
                        </a>
                        <a href="/">
                            <img src={youtube_black} alt="#" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;