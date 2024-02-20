import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchService.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ServiceItem from '../../components/Listservice/ServiceItem';
import {
    faBed,
    faCarSide,
    faPersonHiking,
    faPlaneDeparture,
    faShippingFast,
    faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchService({ className }) {
    const classes = cx('servive-menu', {
        [className]: className,
    });
    return (
        <nav className={classes}>
            <ServiceItem title={'hotel'} href={'#'} icon={<FontAwesomeIcon icon={faBed} />} />
            <ServiceItem title={'car rentals'} href={'#'} icon={<FontAwesomeIcon icon={faCarSide} />} />
            <ServiceItem title={'flights'} href={'#'} icon={<FontAwesomeIcon icon={faPlaneDeparture} />} />
            <ServiceItem title={'trips'} href={'#'} icon={<FontAwesomeIcon icon={faUmbrellaBeach} />} />
            <ServiceItem title={'cuises'} href={'#'} icon={<FontAwesomeIcon icon={faShippingFast} />} />
            <ServiceItem title={'activites'} href={'#'} icon={<FontAwesomeIcon icon={faPersonHiking} />} />
        </nav>
    );
}

export default SearchService;
