import React, { useState } from 'react'

const Header = ({setInputValue}) => {
    const [value, setValue] = useState("");

    const handleFunction = () =>{
        setInputValue(value);
        setValue("")
    }
  return (
    <div className='container'>
        <h1>URL <span>Shortener</span> </h1>
        <div className='inputs'>
            <input 
            type="text" 
            placeholder='place url to shorten'
            value={value} 
            onChange={(e)=> setValue(e.target.value)}
            />
            <button onClick={handleFunction}>click to shorten</button>
        </div>
    </div>
  )
}

export default Header