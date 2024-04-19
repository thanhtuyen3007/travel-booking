import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('navbar-container')}>
                <Link to="/" className={cx('navbar-logo')}>
                    <FontAwesomeIcon className={cx('logo')} icon={faEarthAmerica} />
                    <span className={cx('title-logo')}>TRAVEL.</span>
                </Link>

                <Menu>
                    <MenuItem title="Home" to="/" />
                    <MenuItem title="About" to="/about" />
                    <MenuItem title="tours" to="/tours" />
                    <MenuItem title="News" to="/news" />
                    <MenuItem title="Contact" to="/contact" />
                </Menu>
            </nav>
        </div>
    );
}

export default Navbar;
