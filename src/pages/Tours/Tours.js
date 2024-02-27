import React from 'react';
import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Tours.module.scss';
import Slider from '~/components/Layout/Slider/Slider';
import images from '~/assets';
import FormBooking from '~/components/FormBooking/FormBooking';
import ListTours from '~/components/ListTours/ListTours';
import request from '~/untils/http';

const cx = classNames.bind(styles);

function Tours() {
    const [bestTour, setBestTour] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get('/tour');
                return setBestTour(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-wrapper')}>
                <Slider title="our tours" src={images.sliderTours} />
            </div>
            <div className={cx('search-tour')}>
                <FormBooking />
            </div>
            <ListTours data={bestTour} />
        </div>
    );
}

export default Tours;
