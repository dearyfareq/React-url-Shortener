import React, { useState } from 'react'

const Result = () => {
    const [shortLink, SetShortLink] = useState("");
  return (
    <div className='results'>
        <p>{shortLink}</p>
    </div>
  )
}

export default Result