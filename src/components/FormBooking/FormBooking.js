import React from 'react';
import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './FormBooking.module.scss';
import Wrapper from '~/components/Wrapper/Wrapper';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function FormBooking({ className, data }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const [visible, setVisible] = useState(true);
    // const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const inputRef = useRef();
    console.log(searchResult);
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        data.forEach((data) => {
            if (data.title.includes(searchValue)) {
                setSearchResult((prevdata) => [...prevdata, data]);
            }
        });
        return () => {
            setSearchResult([]);
        };
    }, [searchValue, data]);

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
                <div className={cx('search-input')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        spellCheck={false}
                        className={cx('input-form')}
                        placeholder="Enter a destination (e.g. Ha Long, Da Nang...)"
                        onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                    <Link href='#' className={cx('search-link')}><FontAwesomeIcon className={cx('search-icon')} icon={faSearch} /></Link>
                </div>
            </HeadlessTippy>
        </form>
    );
}

export default FormBooking;
