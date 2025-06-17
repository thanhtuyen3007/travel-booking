import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';

import images from '~/assets';
import styles from './Contact.module.scss';
import Input from '~/components/Input/Input';
import Button from '~/components/Button/Button';
import Slider from '~/components/Layout/Slider/Slider';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <Slider title="contact" src={images.sliderContact} />
            <div className={cx('contact-container')}>
                <form className={cx('form-contact')}>
                    <Input className={cx('contact-input')} large type={'text'} placeholder={'Name'}></Input>
                    <Input className={cx('contact-input')} large type={'email'} placeholder={'E-mail'}></Input>
                    <textarea className={cx('contact-text')} placeholder="Message"></textarea>
                    <div className={cx('send-btn')}>
                        <Button button>Send message</Button>
                    </div>
                </form>
                <div className={cx('contact-content')}>
                    <div className={cx('contact-img')}>
                        <img src={images.contact} alt="" />
                    </div>
                   <div className={cx('contact-intro')}>
                        <div className={cx('introduce')}>
                            <Link to="/" className={cx('contact-logo')}>
                                <FontAwesomeIcon className={cx('logo')} icon={faEarthAmerica} />
                                <span className={cx('title-logo')}>TRAVEL.</span>
                            </Link>
                            <div className={cx('contact-itro-decs')}>
                                <p>
                                    Uncover the beauty of Vietnam and beyond. Your journey starts here. We’re here to help
                                    you explore the most captivating corners of the world. Thank you for choosing us as your
                                    travel companion.
                                </p>
                            </div>
                            <div className={cx('contact-social')}>
                                <FontAwesomeIcon className={cx('contact-icon-social')} icon={faFacebook} />
                                <FontAwesomeIcon className={cx('contact-icon-social')} icon={faPinterest} />
                                <FontAwesomeIcon className={cx('contact-icon-social')} icon={faTwitter} />
                                <FontAwesomeIcon className={cx('contact-icon-social')} icon={faYoutube} />
                                <FontAwesomeIcon className={cx('contact-icon-social')} icon={faYahoo} />
                            </div>
                        </div>
                        <div className={cx('contact-infor')}>
                            <ul className={cx('contact-infor-list')}>
                                <li>307 Phan Van Tri, Quan Go Vap</li>
                                <li>+84 123 456 789</li>
                                <li>travelcompany@gmail.com</li>
                                <li>travel.vn</li>
                            </ul>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
