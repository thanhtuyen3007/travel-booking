import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ListTours.module.scss';

const cx = classNames.bind(styles);
function Touritem({ data }) {
    return (
        <div className={cx('tour-container')}>
            <Link>
                <img className={cx('tour-img')} src={data.url} alt={data.title} />
                <div className={cx('tour-decs')}>
                    <strong className={cx('tour-title')}>{data.title}</strong>
                    <div className={cx('tour-infor')}>
                        <p className={cx('tour-price')}>from ${data.price} </p>
                        <p className={cx('tour-day')}>
                            {data.day} day
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Touritem;
