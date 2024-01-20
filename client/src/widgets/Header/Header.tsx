import React from 'react';
import CustomButton from '../../shared/CustomButton/CustomButton';
import location_pin from '../../images/icons/location_pin.svg';
import acccount_circle from '../../images/icons/account_circle.svg';
import forum from '../../images/icons/forum.svg';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="header__shop">
                <Link to='/' className='header__shop__logo'>
                    MyCake
                </Link>
                <div className="header__shop__country">
                    <CustomButton icon={location_pin} text='Вся Україна' styles='pink' />
                </div>
            </div>
            <nav className='header__nav'>
                <Link className='header__nav__item link' to='/'>Десерти</Link>
                <Link className='header__nav__item link' to='/'>Кращі кондитери</Link>
                <Link className='header__nav__item link' to='/'>Корисні статті</Link>
            </nav>
            <div className="header__account">
                <Link to='/' className='header__account_item'>
                    <img src={forum} alt="#" />
                </Link>
                <Link to='/' className='header__account_item'>
                    <img src={acccount_circle} alt="#" />
                    Увійти
                </Link>
            </div>
        </header>
    )
}

export default Header;