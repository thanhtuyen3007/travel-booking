import React from 'react';
import classNames from 'classnames/bind';
import styles from './FormBooking.module.scss';
import Input from '~/components/Input/Input';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function FormBooking({ className }) {
    const classes = cx('search-input-form', {
        [className]: className,
    });
    return (
        <div className={cx('search-input')}>
            <form className={classes}>
                <Input type={'text'} medium placeholder={'Destination'}></Input>
                <Input type={'date'} small placeholder={' departure day'}></Input>
                <Input type={'number'}  min={1} max={200} extraSmall placeholder={'customers'}></Input>
                <Button button className={cx('btn-search')}>
                    Search
                </Button>
            </form>
        </div>
    );
}

export default FormBooking;
