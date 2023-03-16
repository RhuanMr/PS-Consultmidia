import React from 'react';
import './styles.css';
import Logo from './assets/Logo.png'
import HeaderHooks from './hooks';

const Header = () => {
    const {
        handleClick
    } = HeaderHooks();
    return (
        <button onClick={() => handleClick()} className='containerHeader'>
            <img src={Logo} alt='Logo' />
            <div className='headerName'>
                <span>New</span>
                <span>Car</span>
            </div>
        </button>
    )
}

export default Header;