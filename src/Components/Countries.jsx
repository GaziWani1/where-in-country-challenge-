import React, { useEffect, useState } from 'react'
import Card from './Card'

const Countries = ({ data, countryName ,region}) => {

  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    const singleData = data.filter((item) => item.name.toLowerCase() === countryName)
    setSearchCountry(singleData);
  }, [countryName])

  useEffect(() => {
    const regiondata = data.filter((item) => item.region === region)
    setSearchCountry(regiondata);
  },[region])

  return (
    <div className='countries'>
      {searchCountry.length == 0 ?
        data.slice(0, 8).map((country, index) => {
          return <Card key={index} country={country} />
        }) : searchCountry.map((country, index) => {
          return <Card key={index} country={country} />
        })
      }
    </div>

  )
}

export default Countries