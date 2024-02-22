import React from 'react';

import classNames from 'classnames/bind';
import styles from './ListRooms.module.scss';

import Rating from '~/components/StarRating/Rating';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function RoomItemLarge({ data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('room-img')}>
                <img src={data.url} alt={data.name} />
                <span className={cx('room-name')}>{data.name}</span>
            </div>
            <div className={cx('room-content')}>
                <span className={cx('room-price')}>
                    <strong>${data.price}</strong> Per night
                </span>
                <p className={cx('room-desc')}>{data.desc}</p>
                <Rating key={data.id} maxStar={5} selectedRating={data.star} data={data} />
                <Button className={cx('btn-room')}>
                    Read more
                </Button>
            </div>
        </div>
    );
}

export default RoomItemLarge;
