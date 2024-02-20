import React from 'react';

import classNames from 'classnames/bind';
import styles from './Offers.module.scss';

import images from '~/assets';
import Slider from '~/components/Layout/Slider/Slider';
import SearchService from '~/components/Listservice/SearchService';
import FormBooking from '~/components/FormBooking/FormBooking';

const cx = classNames.bind(styles);

function Offers() {
    return (
        <div className={cx('offer-wrapper')}>
            <div className={cx('slider-wrapper')}>
                <Slider title="our offers" src={images.sliderOffers} />
                <SearchService className={cx('position')}></SearchService>
            </div>
            <div className={cx('search-tour')}>
                <FormBooking />
            </div>
        </div>
    );
}

export default Offers;
