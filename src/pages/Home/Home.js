import classNames from 'classnames/bind';
import style from './Home.module.scss';

import images from '~/assets';
import Button from '~/components/Button/Button';
import Slider from '~/components/Layout/Slider/Slider';
import FormBooking from '~/components/FormBooking/FormBooking';
import ListTours from '~/components/ListTours/ListTours';
import FeedBackList from '~/components/FeedBackList/FeedBackList';
import dataTours from '~/data';
import dataFeedback from '~/dataFeedback';

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-wrapper')}>
                <Slider title="discover" titleSmall="Viet Nam" src={images.sliderHome} />
            </div>
            <div className={cx('search-tour')}>
                <FormBooking data={dataTours} />
            </div>
            <div className={cx('best-tour')}>
                <h2 className={cx('best-tour-title')}>We have the best tours</h2>
                <span className={cx('best-tour-desc')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse
                    potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.
                </span>
                <ListTours data={dataTours} lengthData={9} />
                <div className={cx('see-more')}>
                    <Button button to={'/tours'}>
                        See more...
                    </Button>
                </div>
            </div>
            <div className={cx('deluxe-package')}>
                <div className={cx('background-img')}>
                    <img src={images.travelLuxury} alt="" />
                </div>
                <div className={cx('deluxe-package-content')}>
                    <span className={cx('deluxe-package-title')}>MALDIVES DELUXE PACKAGE</span>
                    <p className={cx('deluxe-package-decs')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse
                        potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.
                    </p>
                    <Button button>book now</Button>
                </div>
            </div>
            <div className={cx('feed-back')}>
                <h2 className={cx('title-feedback')}>WHAT OUR CLIENTS SAY ABOUT US</h2>
                <FeedBackList data={dataFeedback} />
            </div>
        </div>
    );
}

export default Home;
