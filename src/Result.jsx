import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

const Result = ({inputValue} ) => {
    const [shortLink, SetShortLink] = useState("");
    console.log(inputValue)
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