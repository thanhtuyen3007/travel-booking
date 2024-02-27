import React from 'react'
import NewsItem from './NewsItem'
import classNames from 'classnames/bind'
import styles from './ListNews.module.scss'

const cx = classNames.bind(styles)

function ListNews({data = [], className}) {
  return (
   <div className={cx('wrapper')}>
    {data.map((data) => (
        <NewsItem key={data.id} data={data}/>
    ))}
   </div>
  )
}

export default ListNews