import React from 'react';
import CustomButton from '../../shared/CustomButton/CustomButton';
import location_pin from '../../images/icons/location_pin.svg';
import acccount_circle from '../../images/icons/account_circle.svg';
import forum from '../../images/icons/forum.svg';
import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="header__shop">
                <a href='/' className='header__shop__logo'>
                    MyCake
                </a>
                <div className="header__shop__country">
                    <CustomButton icon={location_pin} text='Вся Україна' styles='pink' />
                </div>
            </div>
            <nav className='header__nav'>
                <a className='header__nav__item link' href='/'>Десерти</a>
                <a className='header__nav__item link' href='/'>Кращі кондитери</a>
                <a className='header__nav__item link' href='/'>Корисні статті</a>
            </nav>
            <div className="header__account">
                <a href='/' className='header__account_item'>
                    <img src={forum} alt="#" />
                </a>
                <a href='/' className='header__account_item'>
                    <img src={acccount_circle} alt="#" />
                    Увійти
                </a>
            </div>
        </header>
    )
}

export default Header;