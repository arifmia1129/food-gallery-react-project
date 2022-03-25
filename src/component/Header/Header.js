import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
const Header = () => {
    return (
        <div className='navbar'>
            <div>
                <h1>Food Gallery</h1>
            </div>
            <div className='icon'>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </div>
    );
};

export default Header;