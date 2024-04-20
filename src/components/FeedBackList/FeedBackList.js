import React from 'react';
import classNames from 'classnames/bind';

import styles from './FeedBackList.module.scss';
import FeedBackItem from './FeedBackItem';

const cx = classNames.bind(styles);
function FeedBackList({ data }) {
    return (
        <nav className={cx('wrapper')}>
            {data.map((data) => (
                <FeedBackItem key={data.id} data={data} />
            ))}
        </nav>
    );
}
export default FeedBackList;
