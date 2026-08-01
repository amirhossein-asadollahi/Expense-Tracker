import './PieCharHeader.css'


import React from 'react'

const PieCharHeader = ({title}) => {
  return (
    <div>
        <p className='chart__title'>{title}</p>
    </div>
  )
}

export default PieCharHeader
