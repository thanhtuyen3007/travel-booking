import React from 'react';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider({ title, src, alt,titleSmall, ...props }) {
    return (
        <div className={cx('slider-container')}>
            <img className={cx('background-img')} src={src} alt={alt} />
            <h1 className={cx('slider-title')}>{title}</h1>
            <h2 className={cx('slider-title-small')}>{titleSmall}</h2>
        </div>
    );
}

export default Slider;
