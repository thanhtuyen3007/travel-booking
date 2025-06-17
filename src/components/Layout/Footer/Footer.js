import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { faFacebook, faPinterest, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    const listTags = [
        { link: '/news', title: 'design' },
        { link: '/news', title: 'fashion' },
        { link: '/news', title: 'party' },
        { link: '/news', title: 'photograpy' },
        { link: '/news', title: 'music' },
        { link: '/news', title: 'video' },
        { link: '/news', title: 'travel' },
        { link: '/news', title: 'adventure' },
    ];
    const listPartners = [
        { link: '/', title: 'Booking' },
        { link: '/', title: 'Car' },
        { link: '/', title: 'Hotel' },
        { link: '/', title: 'Booking' },
        { link: '/', title: 'Booking' },
        { link: '/', title: 'Booking' },
        { link: '/', title: 'Booking' },
    ];
    return (
        <footer className={cx('footer-wrapper')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-infor')}>
                    <Link to="/" className={cx('footer-logo')}>
                        <FontAwesomeIcon className={cx('logo')} icon={faEarthAmerica} />
                        <span className={cx('title-logo')}>TRAVEL.</span>
                    </Link>
                    <div className={cx('footer-text')}>
                        <p>
                            We are a premium travel agency offering unforgettable journeys across Vietnam and beyond.
                            With years of experience, we craft personalized tours that connect you with culture, nature,
                            and authentic local life. Let us turn your travel dreams into reality – with comfort,
                            elegance, and unforgettable memories.
                        </p>
                    </div>
                    <div className={cx('footer-social')}>
                        <FontAwesomeIcon className={cx('footer-icon-social')} icon={faFacebook} />
                        <FontAwesomeIcon className={cx('footer-icon-social')} icon={faPinterest} />
                        <FontAwesomeIcon className={cx('footer-icon-social')} icon={faTwitter} />
                        <FontAwesomeIcon className={cx('footer-icon-social')} icon={faYoutube} />
                        <FontAwesomeIcon className={cx('footer-icon-social')} icon={faYahoo} />
                    </div>
                </div>
                <div className={cx('footer-partners')}>
                    <span className={cx('footer-infor-title')}>Partners</span>
                    <ul className={cx('partners-list')}>
                        {listPartners.map(({ link, title }, index) => (
                            <li className={cx('partner-item')} key={index}>
                                <a className={cx('parner-link')} href={link}>
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('footer-tag')}>
                    <span className={cx('footer-infor-title')}>Partners</span>
                    <ul className={cx('footer-tag-list')}>
                        {listTags.map(({ link, title }, index) => (
                            <li className={cx('footer-tag-item')} key={index}>
                                <Link to={link} className={cx('tag-item-link')}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('footer-contact-infor')}>
                    <span className={cx('footer-infor-title')}>contact infor</span>
                    <ul className={cx('contact-infor-list')}>
                        <li>307 Phan Van Tri, Quan Go Vap</li>
                        <li>+84 123 456 789</li>
                        <li>travelcompany@gmail.com</li>
                        <li>travel.vn</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
