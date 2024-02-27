import React from 'react';
import classNames from 'classnames/bind';
import styles from './ListNews.module.scss';

const cx = classNames.bind(styles);

function NewsItem({ data }) {
    return (
        <div className={cx('wrapper-item')}>
            <div className={cx('news-img')}>
                <img src={data.url} alt={data.title} />
            </div>
            <div className={cx('news-content')}>
                <span className={cx('news-title')}>{data.title}</span>
                <span className={cx('day')}>{data.day}</span>
                <span className={cx('views')}>87.592</span>
                <div className={cx('text')}>
                    <p>{data.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
