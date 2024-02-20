import React from 'react';
import classNames from 'classnames/bind';
import styles from './FormBooking.module.scss';
import Input from '~/components/Input/Input';

const cx = classNames.bind(styles);

function FormBooking({ className }) {
    const classes = cx('search-input-form', {
        [className]: className,
    });
    return (
       <div className={cx('search-input')}>
            <form className={classes}>
                {' '}
                <Input type={'text'} medium>
                    DESTINATION
                </Input>
                <Input type={'number'} small placeholder={'DD-MM-YYYY'}>
                    check-out
                </Input>
                <Input type={'number'} small placeholder={'DD-MM-YYYY'}>
                    check-in
                </Input>
                <Input type={'number'} extraSmall>
                    ADULTS
                </Input>
                <Input type={'number'} extraSmall>
                    children
                </Input>
            </form>
       </div>
    );
}

export default FormBooking;
