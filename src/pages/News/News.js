import React from 'react';
import { useState, useEffect } from 'react';
import images from '~/assets';

import classNames from 'classnames/bind';

import styles from './News.module.scss';
import Slider from '~/components/Layout/Slider/Slider';
import ListNews from '~/components/ListNews/ListNews';
import request from '~/untils/http';
import NewsItem from '~/components/ListNews/NewsItem';

const cx = classNames.bind(styles);

function News() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await request.get('/feedback');
                return setNews(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Slider title="the blog" src={images.sliderNews} />
            <div className={cx('hot-news')}>
                <div className={cx('title-new')}>
                    <h4 className={cx('title-text')}>Hot news</h4>
                </div>
                <div className={cx('hot-news-container')}>
                    {news.slice(0, 3).map((data) => (
                        <div key={data.id} className={cx('hot-new-item')}>
                            <img className={cx('hot-new-img')} src={data.url} alt={data.title} />
                            <span className={cx('hot-new-decs')}>{data.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('news')}>
                <div className={cx('title-new')}>
                    <h4 className={cx('title-text')}>news</h4>
                </div>
                <ListNews data={news} />
            </div>
        </div>
    );
}

export default News;
