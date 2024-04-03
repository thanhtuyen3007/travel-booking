import React from 'react';

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Offers.module.scss';

import images from '~/assets';
import Slider from '~/components/Layout/Slider/Slider';
import FormBooking from '~/components/FormBooking/FormBooking';
import dataRooms from '~/dataRooms';

import ListRoomsOffer from '~/components/ListRoomsOffer/ListRoomsOffer';

const cx = classNames.bind(styles);

function Offers() {
    return (
        <div className={cx('offer-wrapper')}>
            <div className={cx('slider-wrapper')}>
                <Slider title="our offers" src={images.sliderOffers} />
            </div>
            <div className={cx('search-tour')}>
                <FormBooking />
            </div>
            <div className={cx('list-offer')}>
                <ListRoomsOffer className={cx('no-flex')} data={dataRooms} />
            </div>
        </div>
    );
}

export default Offers;
