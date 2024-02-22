import React from 'react';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Navbar from '~/components/Layout/Navbar/Navbar';
import Footer from '~/components/Layout/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
