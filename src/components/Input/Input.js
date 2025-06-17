import React from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({
    type,
    value,
    ref,
    placeholder,
    className,
    id,
    extraSmall = false,
    small = false,
    medium = false,
    large = false,
    extralarge = false,
    outline = false,
    label,
    textarea = false,
    onChange,
    ...passProp
}) {
    let Comp = 'input';
    if (textarea) {
        Comp = 'textarea';
    } else {
        Comp = 'input';
    }
    const props = {
        onChange,
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
            <Comp id={id} {...props} type={type} value={value} ref={ref} placeholder={placeholder}></Comp>
        </div>
    );
}
export const InputRef = forwardRef((props, ref) => {
    return <Comp ref={ref}>Reference</Comp>;
});

export default Input;
