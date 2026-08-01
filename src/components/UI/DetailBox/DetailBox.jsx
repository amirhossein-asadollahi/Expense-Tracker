import './DetailBox.css'

import React from 'react'

const DetailBox = ({icon, title, value, desc, iconColor}) => {
  return (
    <div className='detail__box'>
        <div className="detail__box-icon">
            <span style={{backgroundColor:`var(${iconColor})`}} className='detail__box-logo'>
                {icon}
            </span>
        </div>
        <div className="detail__box-text">
            <p className='detail__box-title'>{title}</p>
            <p style={{color:`var(${iconColor})`}} className='detail__box-price'>{value}</p>
            <p className='detail__box-desc'>{desc}</p>
        </div>
    </div>
  )
}

export default DetailBox