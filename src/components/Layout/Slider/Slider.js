import React from 'react';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider({ title, src, alt, titleSmall, titleTour, descTour }) {
    return (
        <div className={cx('slider-wrapper')}>
            <img className={cx('background-img')} src={src} alt={alt} />
            <div className={cx('slider-container')}>
                <h1 className={cx('slider-title')}>{title}</h1>
                <h2 className={cx('slider-title-small')}>{titleSmall}</h2>
            </div>
            <div className={cx('slider-tour')}>
                <h3 className={cx('slider-title-tour')}>{titleTour}</h3>
                <h4 className={cx('slider-decs-tour')}>{descTour}</h4>
            </div>
        </div>
    );
}

export default Slider;
