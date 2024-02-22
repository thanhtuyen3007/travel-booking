import React from 'react';
import classNames from 'classnames/bind';

import styles from './ListRooms.module.scss';
import RoomItem from './RoomItem';
import RoomItemLarge from './RoomItemLarge';

const cx = classNames.bind(styles);

function ListRooms({ data = [], className, isOffer }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            {data.map((data) => (
                <RoomItem key={data.id} data={data} />
            ))}
        </div>
    );
}

export default ListRooms;
