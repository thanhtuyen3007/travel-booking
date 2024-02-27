import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import style from './Home.module.scss';

import images from '~/assets';
import Button from '~/components/Button/Button';
import Slider from '~/components/Layout/Slider/Slider';
import * as listBestTour from '~/sevices/listBestTour';
import FormBooking from '~/components/FormBooking/FormBooking';
import ListTours from '~/components/ListTours/ListTours';
import ListRooms from '~/components/ListRooms/ListRooms';
import FeedBackList from '~/components/FeedBackList/FeedBackList';
import request from '~/untils/http';

const cx = classNames.bind(style);

function Home() {
    const [bestTour, setBestTour] = useState([]);
    const [offer, setOffer] = useState([]);
    const [feedback, setFeedBack] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await listBestTour.getBestTour(1, 9);
            setBestTour(result);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get('/room', {
                    params: {
                        // eslint-disable-next-line no-undef
                        _page: '1',
                        _per_page: '4',
                    },
                });
                return setOffer(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get('/feedback');
                return setFeedBack(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-wrapper')}>
                <Slider title="discover" titleSmall="Viet Nam" src={images.sliderHome} />
            </div>
            <div className={cx('search-tour')}>
                <FormBooking />
            </div>
            <div className={cx('best-tour')}>
                <h2 className={cx('best-tour-title')}>We have the best tours</h2>
                <span className={cx('best-tour-desc')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse
                    potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.
                </span>
                <ListTours data={bestTour} />
                <div className={cx('see-more')}>
                    <Button button to={'/tours'}>
                        See more...
                    </Button>
                </div>
            </div>
            <div className={cx('deluxe-package')}>
                <div className={cx('background-img')}>
                    <img src={images.travelLuxury} alt="" />
                </div>
                <div className={cx('deluxe-package-content')}>
                    <span className={cx('deluxe-package-title')}>MALDIVES DELUXE PACKAGE</span>
                    <p className={cx('deluxe-package-decs')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse
                        potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.
                    </p>
                    <Button button>book now</Button>
                </div>
            </div>
            <div className={cx('booking-room')}>
                <h3 className={cx('title-room')}>THE BEST OFFERS WITH ROOMS</h3>
                <ListRooms data={offer} />
            </div>
            <div className={cx('feed-back')}>
                <h2 className={cx('title-feedback')}>WHAT OUR CLIENTS SAY ABOUT US</h2>
                <FeedBackList data={feedback} />
            </div>
        </div>
    );
}

export default Home;
