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
    label,
    textarea = false,
    onClick,
    ...passProp
}) {
    let Comp = 'input';
    if (textarea) {
        Comp = 'textarea';
    } else {
        Comp = 'input';
    }
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
                {label}
            </label>
            <Comp id={id} {...props} type={type} value={value} min={min} max={max} placeholder={placeholder}></Comp>
        </div>
    );
}

export default Input;
