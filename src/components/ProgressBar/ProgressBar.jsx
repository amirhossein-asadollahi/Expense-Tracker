import './ProgressBar.css'

import React from 'react'

const ProgressBar = ({progress, color}) => {
  return (
    <div className="progress">
      <div
        className="progress__bar"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  )
}

export default ProgressBar