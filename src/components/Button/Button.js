import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, className, children, onClick, disabled = false,button = false, ...passProp }) {
    let Comp = 'button'; // mặc định là thẻ button

    const props = {
        onClick,
        ...passProp,
    };

    //Remove event listener when btn is disabled
    if (disabled) {
        //detele props onclick
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on' && typeof props[key] === 'function')) {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        button,
        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
