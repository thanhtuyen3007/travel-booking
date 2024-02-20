import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SearchService.module.scss';

const cx = classNames.bind(styles);

function ServiceItem({ title, to, href, icon, ...passProp }) {
    let Component = 'NavLink';
    const props = { ...passProp };
    if (to) {
        props.to = to;
        Component = NavLink;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    return (
        <div className={cx('service-item')}>
            <Component className={cx('item') } {...props}>
                {icon} {title}
            </Component>
        </div>
    );
}

export default ServiceItem;
