import React from 'react';

import classNames from 'classnames/bind';
import styles from './Tours.module.scss';
import Slider from '~/components/Layout/Slider/Slider';
import images from '~/assets';
import FormBooking from '~/components/FormBooking/FormBooking';
import ListTours from '~/components/ListTours/ListTours';
import dataTours from '~/data';

const cx = classNames.bind(styles);

function Tours() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-wrapper')}>
                <Slider title="our tours" src={images.sliderTours} />
            </div>
            <div className={cx('search-tour')}>
                <FormBooking />
            </div>
            <ListTours data={dataTours} />
        </div>
    );
}

export default Tours;
