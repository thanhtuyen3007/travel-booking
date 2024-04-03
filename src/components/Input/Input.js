import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({
    type,
    value,
    min,
    max,
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
    const classes = cx('wrapper-input', {
        [className]: className,
        extraSmall,
        small,
        medium,
        large,
        outline,
    });
    return (
        <div className={classes}>
            <label className={cx('label')} htmlFor={id}>
                {children}
            </label>
            <input id={id} {...props} type={type} value={value} min={min} max={max} placeholder={placeholder} />
        </div>
    );
}

export default Input;
