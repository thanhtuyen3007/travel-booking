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
                <Input type={'text'} medium>
                    DESTINATION
                </Input>
                <Input type={'number'} small placeholder={'DD-MM-YYYY'}>
                    departure day
                </Input>
                <Input type={'number'} extraSmall>
                    customers
                </Input>
                <Button>Search</Button>
            </form>
       </div>
    );
}

export default FormBooking;
