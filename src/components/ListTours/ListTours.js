import React from 'react';
import classNames from 'classnames/bind';

import styles from './ListTours.module.scss';
import Touritem from './Touritem';

const cx = classNames.bind(styles);

function ListTours({ data = [] }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((data) => (
                <Touritem key={data.id} data={data} />
            ))}
        </div>
    );
}

export default ListTours;
