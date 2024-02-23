import React from 'react';

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Offers.module.scss';

import images from '~/assets';
import Slider from '~/components/Layout/Slider/Slider';
import SearchService from '~/components/Listservice/SearchService';
import FormBooking from '~/components/FormBooking/FormBooking';
import request from '~/untils/http';
import ListRoomsOffer from '~/components/ListRoomsOffer/ListRoomsOffer';

const cx = classNames.bind(styles);

function Offers() {
    const [offer, setOffer] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get('/room', {});
                return setOffer(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('offer-wrapper')}>
            <div className={cx('slider-wrapper')}>
                <Slider title="our offers" src={images.sliderOffers} />
                <SearchService className={cx('position')}></SearchService>
            </div>
            <div className={cx('search-tour')}>
                <FormBooking />
            </div>
            <div className={cx('list-offer')}>
                <ListRoomsOffer className={cx('no-flex')} data={offer} />
            </div>
        </div>
    );
}

export default Offers;
