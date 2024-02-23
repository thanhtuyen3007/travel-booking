import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({
    type,
    placeholder,
    className,
    id,
    extraSmall = false,
    small = false,
    medium = false,
    large = false,
    outline = false,
    children,
    onClick,
    ...passProp
}) {
    const props = {
        onClick,
        ...passProp,
    };
    const classes = cx({
        [className]: className,
        extraSmall,
        small,
        medium,
        large,
        outline,
    });
    return (
        <div className={cx('wrapper-input')}>
            <label className={cx('label')} htmlFor={id}>
                {children}
            </label>
            <input className={classes} id={id} {...props} placeholder={placeholder} />
        </div>
    );
}

export default Input;
