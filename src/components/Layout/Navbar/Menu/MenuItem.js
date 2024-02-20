import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to }) {
    return <NavLink className={(nav) => cx('navbar-menu-item',{active: nav.isActive})} to={to}>
        {
            ({isActive}) => (
                <span className={cx('title')}>{title}</span>
            )
        }
    </NavLink>;
}

export default MenuItem;
