import React from 'react'
import classNames from 'classnames/bind'

import styles from './FeedBackList.module.scss'
import Rating from '../StarRating/Rating'


const cx = classNames.bind(styles)

function FeedBackItem({ data }) {
  return (
    <div className={cx('container')}>
       <span className={cx('name')}>{data.name}</span>
       <img className={cx('avatar')} src={data.url} alt={data.name}/>
       <p className={cx('comment')}>{data.feedback}</p>
       <div className={cx('rating')}><Rating maxStar={5} selectedRating={5}/></div>
    </div>
  )
}

export default FeedBackItem