
import images from '~/assets';
import classNames from 'classnames/bind';

import styles from './News.module.scss';
import Slider from '~/components/Layout/Slider/Slider';
import ListNews from '~/components/ListNews/ListNews';
import dataNews from '~/dataNews';

const cx = classNames.bind(styles);

function News() {
    return (
        <div className={cx('wrapper')}>
            <Slider title="the blog" src={images.sliderNews} />           
            <div className={cx('news')}>
                <div className={cx('title-new')}>
                    <h4 className={cx('title-text')}>news</h4>
                </div>
                <ListNews data={dataNews} />
            </div>
        </div>
    );
}

export default News;
