import React from 'react';
import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './FormBooking.module.scss';
import Button from '~/components/Button/Button';
import Wrapper from '~/components/Wrapper/Wrapper';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function FormBooking({ className, data }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const [visible, setVisible] = useState(true);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const inputRef = useRef();
    console.log(searchResult);
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        data.map((data) => {
            if (data.title.includes(searchValue)) {
                setSearchResult((prevdata) => [...prevdata, data]);
            }
        });
        return () => {
            setSearchResult([]);
        };
    }, [searchValue]);

    const classes = cx('search-input-form', {
        [className]: className,
    });
    return (
        <form className={classes}>
            <HeadlessTippy
                appendTo={() => document.body}
                interactive
                placement="bottom-start"
                visible={visible && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            {searchResult.map((result) => (
                                <Link to={`/${result.title}`} className={cx('search-result-item')} key={result.id}>
                                    <h4 className={cx('search-result-title')}>{result.title}</h4>
                                    <span className={cx('search-result-decs')}>
                                        {`tour đi ${result.title} ${result.day} ngày trọn gói, đáng trải nghiệm nhất `}
                                    </span>
                                </Link>
                            ))}
                        </Wrapper>
                    </div>
                )}
                onClickOutside={hide}
            >
                <input
                    ref={inputRef}
                    value={searchValue}
                    spellCheck={false}
                    className={cx('input-form')}
                    placeholder="Destination"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </HeadlessTippy>
            <Button button className={cx('btn-search')}>
                Search
            </Button>
        </form>
    );
}

export default FormBooking;
