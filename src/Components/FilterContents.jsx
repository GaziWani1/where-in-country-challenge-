import React, { useEffect, useState } from 'react'

const FilterContents = ({ region, setRegion }) => {

    const [showMenu, setShowMenu] = useState(false)

    const show_Menu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true)
    }

    return (
        <div className={`drop-down ${showMenu ? 'active' : ''} `} >
            <input value={region} placeholder='Search by region' onClick={show_Menu} readOnly />
            <div className="options">
                <div onClick={() => { setRegion('Africa'); showMenu ? setShowMenu(false) : setShowMenu(true) }} >Africa</div>
                <div onClick={() => { setRegion('America'); showMenu ? setShowMenu(false) : setShowMenu(true) }}>America</div>
                <div onClick={() => { setRegion('Asia'); showMenu ? setShowMenu(false) : setShowMenu(true) }}>Asia</div>
                <div onClick={() => { setRegion('Europe'); showMenu ? setShowMenu(false) : setShowMenu(true) }}>Europe</div>
                <div onClick={() => { setRegion('Oceania'); showMenu ? setShowMenu(false) : setShowMenu(true) }}>Oceania</div>
            </div>
        </div>
    )
}

export default FilterContents