import Slider from '~/components/Layout/Slider/Slider';
import classNames from 'classnames/bind';
import styles from './DescTourPage.module.scss';
import Input from '~/components/Input/Input';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function DescTourPage({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Slider
                titleTour={data.title}
                src={data.url}
                descTour={`tour đi ${data.title} ${data.day} ngày trọn gói, đáng trải nghiệm nhất `}
            />
            <div className={cx('desc-content')}>
                <div className={cx('desc-detail')}>
                    <span className={cx('desc-detail-title')}>
                        {`tour đi ${data.title} ${data.day} ngày trọn gói, đáng trải nghiệm nhất `}
                    </span>
                    <p className={cx('desc-detail-para')}>
                        {` Việc khám phá ${data.title} luôn là sự lựa chọn hàng đầu cho những người mê du lịch và
                        muốn tìm hiểu về những vùng đất mới. Nơi này sở hữu cảnh quan đa dạng, đẹp đến nao lòng. Ngoài ra con người chất
                        phác, thân thiện cũng là những điểm đặc trưng của ${data.title}. Cùng với chúng tôi, hãy tham gia tour
                        du lịch ${data.day} tại ${data.title} để khám phá những điều thú vị khác nữa, đây chắc chắn sẽ là một
                        trải nghiệm đáng nhớ…`}
                    </p>
                    <img className={cx('desc-detail-img')} src={data.url}/>
                </div>
                <div className={cx('desc-form')}>
                    <Input className={cx('input-desc-form')} label={'Full name'} type={'text'} large />
                    <Input className={cx('input-desc-form')} label={'Phone'} type={'number'} large />
                    <Input className={cx('input-desc-area')} label={'Message'} textarea large />
                    <Button button className={cx('btn-search')}>
                        Book now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DescTourPage;
