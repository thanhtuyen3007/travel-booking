import React from 'react';
import { StarIcon } from './StarIcon';
import classNames from 'classnames/bind';
import styles from './StarRating.module.scss';

const cx = classNames.bind(styles);

function Rating({ maxStar, selectedRating }) {
    const stars = [];
    for (let star = 0; star < maxStar; star++) {
        stars.push(<StarIcon key={star} color={star < selectedRating ? '#f3cb1a' : ''} />);
    }
    return stars;
}

export default Rating;
