import './Pagination.css'

import React from 'react'

const Pagination = () => {
  return (
    <div className='pagination'>
        <button className="pagination-btn">قبلی</button>
        <button className='pagination-item active'>1</button>
        <button className='pagination-item'>2</button>
        <button className='pagination-item'>3</button>
        <button className='pagination-item'>4</button>
        <button className="pagination-btn">بعدی</button>
    </div>
  )
}

export default Pagination