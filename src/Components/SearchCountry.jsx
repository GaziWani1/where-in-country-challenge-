import React, { useState } from 'react'
import searchIcon from '../icons/search.svg'
import FilterContents from './FilterContents';
export const SearchCountry = ({ setCountry, region , setRegion }) => {
    const [countryName, setCountryName] = useState('');
    
    const handleInput = (e) => {
        setCountryName(e.target.value)
    }

    const country_Name = () => {
        setCountry(countryName)
    }

    return (
        <div className='search-div'>
            <div className='search'>
                <button className='search-btn' onClick={country_Name} ><img src={searchIcon} alt="search" /></button>
                <input onChange={handleInput} value={countryName} type="text" placeholder='Search for a country...' />
            </div>
            <FilterContents region={region} setRegion={setRegion} />
        </div>

    )
}
