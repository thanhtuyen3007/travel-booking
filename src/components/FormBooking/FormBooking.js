import React from 'react';
import classNames from 'classnames/bind';
import styles from './FormBooking.module.scss';
import Input from '~/components/Input/Input';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function FormBooking({ className }) {
    const classes = cx('search-input-form', {
        [className]: className,
    });
    return (
        <div className={cx('search-input')}>
            <form className={classes}>
                <Input className={cx('input-form')} type={'text'} medium placeholder={'Destination'}></Input>
                <Input className={cx('input-form')} type={'date'} small placeholder={' departure day'}></Input>
                <Button button className={cx('btn-search')}>
                    Search
                </Button>
            </form>
        </div>
    );
}

export default FormBooking;
