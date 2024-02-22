import React from 'react'
import classNames from 'classnames/bind'

import styles from './FeedBackList.module.scss'
import Rating from '../StarRating/Rating'


const cx = classNames.bind(styles)

function FeedBackItem({ data }) {
  return (
    <div className={cx('container')}>
       <p className={cx('comment')}>{data.desc}</p>
       <img className={cx('avatar')} src={data.url} alt={data.name}/>
       <span className={cx('name')}>{data.name}</span>
       <div className={cx('rating')}><Rating maxStar={5} selectedRating={5}/></div>
    </div>
  )
}

export default FeedBackItem