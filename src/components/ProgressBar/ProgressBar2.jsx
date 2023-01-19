import React from "react"

export const ProgressBar2 = ({now,label}) => {
  return (
    <div className='ProgressContainer'>
        <span className='bar' style={{width:`${now}%`}}></span>
        <span className='number'>{label}</span>
        </div>
  )
}
