import React from 'react';
import classNames from 'classnames/bind';

import styles from './ListRoomsOffer.module.scss';
import RoomItemOffer from './RoomItemOffer';

const cx = classNames.bind(styles);

function ListRoomsOffer({ data = [], className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            {data.map((data) => (
                <RoomItemOffer key={data.id} data={data} />
            ))}
        </div>
    );
}

export default ListRoomsOffer;
