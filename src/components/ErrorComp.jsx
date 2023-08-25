import React from 'react'
import "./ErrorComp.css"

const ErrorComp = ({message}) => {
  return (
    <div className='error-com'>
<div className='error-message'>{message}</div>
    </div>
    
  )
}

export default ErrorComp