import React, { useEffect, useState } from 'react'
import lightmode from '../icons/light-mode.svg'
import darkmode from '../icons/dark-mode.svg'


const Header = () => {

  const [themeMode, setThemeMode] = useState('light-theme');

  const handleMode = () => {
    themeMode === 'light-theme' ? setThemeMode('dark-theme') : setThemeMode('light-theme')
  }

  useEffect(() => {
    document.body.className = themeMode
  }, [themeMode])

  return (

    <div className='header'>
      <h3 className='heading'>Where in the Country ?</h3>
      <button className='btn-mode' onClick={handleMode}>
        <img src={lightmode} alt="lm" className='btn-img' />
        Light Mode
      </button>
    </div>

  )
}

export default Header