import React from 'react'

const ErrorToast = ({errorMessage}) => {
  return (
    <div>
        {errorMessage.length>0 && <p>{errorMessage}</p>}
    </div>
  )
}

export default ErrorToast