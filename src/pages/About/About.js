import images from '~/assets';
import Slider from '~/components/Layout/Slider/Slider';

import classNames from 'classnames/bind';
import styles from './About.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faMapLocationDot, faPersonWalkingLuggage, faUserLarge } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function About() {
    const statisticsList = [
        { title: 'destination', num: '60+', icon: faMapLocationDot },
        { title: 'tourists visit', num: '1000+', icon: faEarthAsia },
        { title: 'CLIENTS', num: '10000', icon: faPersonWalkingLuggage },
        { title: 'visitors per month', num: '1000', icon: faUserLarge },
    ];
    return (
        <div className={cx('wrapper')}>
            <Slider title="about us" src={images.sliderAbout} />
            <div className={cx('container')}>
                <div className={cx('about-decs')}>
                    <div className={cx('img-decs')}>
                        <img src={images.aboutImg} alt="" />
                    </div>
                    <div className={cx('about-decs-text')}>
                        <h3 className={cx('about-decs-title')}>we have a best tour</h3>
                        <p className={cx('about-parag')}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros,
                            iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium.
                            Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida
                            eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl
                            pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce
                            at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis
                            nibh augue, sed eleifend justo tristique eu
                        </p>
                        <div className={cx('about-btn')}>
                            <Button button to={'/offers'}>See more</Button>
                        </div>
                    </div>
                </div>
                <div className={cx('banner-sale')}>
                    <div className={cx('banner-img')}>
                        <img src={images.banner} alt="" />
                    </div>
                    <div className={cx('banner-text')}>
                        <strong className={cx('banner-name')}>thai land</strong>
                        <span className={cx('banner-price')}>From 199$</span>
                        <Button button>See more</Button>
                    </div>
                </div>
                <div className={cx('statistics')}>
                    <div className={cx('statistics-img')}>
                        <img src={images.sliderHome} alt="" />
                    </div>
                    <div className={cx('statistics-text-list')}>
                        {statisticsList.map(({ title, num, icon }, index) => (
                            <div className={cx('statistics-text')} key={index}>
                                <FontAwesomeIcon className={cx('statistics-icon')} icon={icon} />
                                <span className={cx('statistics-num')}>{num}</span>
                                <span className={cx('statistics-title')}>{title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
