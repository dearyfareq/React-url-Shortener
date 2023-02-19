import React from 'react'

const Header = () => {
  return (
    <div className='container'>
        <h1>URL <span>Shortener</span> </h1>
        <div className='inputs'>
            <input type="text" placeholder='place url to shorten' />
            <button>click to shorten</button>
        </div>
    </div>
  )
}

export default Header