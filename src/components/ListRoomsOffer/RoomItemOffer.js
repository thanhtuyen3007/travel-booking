import React from 'react';

import classNames from 'classnames/bind';
import styles from './ListRoomsOffer.module.scss';

import Rating from '~/components/StarRating/Rating';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function RoomItemOffer({ data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('room-img')}>
                <img src={data.url} alt={data.name} />
            </div>
            <div className={cx('room-content')}>
                <span className={cx('room-name')}>{data.name}</span>
                <p className={cx('room-desc')}>{data.desc}</p>
                <Rating key={data.id} maxStar={5} selectedRating={data.star} data={data} />
                <div className={cx('room-address')}>
                    <FontAwesomeIcon className={cx('address-icon')} icon={faLocationDot} />
                    <span>viet nam</span>
                </div>
            </div>
            <div className={cx('room-price')}>
                <span>
                    <strong>${data.price}</strong> Per night
                </span>
                <Button className={cx('btn-room')}>Book now</Button>
            </div>
        </div>
    );
}

export default RoomItemOffer;
