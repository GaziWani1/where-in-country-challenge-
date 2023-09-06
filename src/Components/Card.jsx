import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ country }) => {
    return (
        <Link className='card-link' to={`/country/${country.name.toLowerCase()}`} >
        <div className='card'>
            <img src={country.flag} alt="flag" className='card-image' />
            <h2>{country.name}</h2>
            <p>Population : {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
        </div>
       </Link > 
    )
}

export default Card