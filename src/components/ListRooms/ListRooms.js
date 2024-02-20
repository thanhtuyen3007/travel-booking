import React from 'react';
import classNames from 'classnames/bind';

import styles from './ListRooms.module.scss';
import RoomItem from './RoomItem';

const cx = classNames.bind(styles);

function ListRooms({ data = [] }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((data) => (
                <RoomItem key={data.id} data={data} />
            ))}
        </div>
    );
}

export default ListRooms;
