import './DashboardSummary.css'

import React from 'react'
import {Summaries} from '../../../configs/dashboardSummary.config.jsx'
import { Link } from 'react-router'

const DashboardSummary = () => {
  return (
    <div className='summary'>
        <div className="summary-head">
            <p>خلاصه ماه</p>
        </div>
        <div className="summary-content">
            {
                Summaries.map(item => {
                    return (
                        <div key={item.id} className='summary-item'>
                            <div className="summary-right">
                                <span className='summary-icon' style={{backgroundColor:`var(${item.iconColor})`}}>
                                    {item.icon}
                                </span>
                                <p className='summary-title'>{item.title}</p>
                            </div>
                            <div className="summary-left">
                                <p className='summary-value'>{item.value}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="summary-navigation">
            <Link to={'/report'} className='summary-navigation-link'>
                مشاهده گزارش کامل
            </Link>
        </div>
    </div>
  )
}

export default DashboardSummary