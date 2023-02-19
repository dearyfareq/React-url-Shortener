import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

const Result = () => {
    const [shortLink, SetShortLink] = useState(shortLink);
  return (
    <div className='results'>
        <p>{shortLink}</p>
        <CopyToClipboard
        text={shortLink}
        >
        <button>Copy to Clipboard</button>
        </CopyToClipboard>
        
    </div>
  )
}

export default Result