import React, { useEffect, useState } from 'react'
import { SearchCountry } from '../Components/SearchCountry'
import { fetchData } from '../utils/fetchData'
import Countries from '../Components/Countries'

const Home = () => {

  const [data, setData] = useState([]);
  const [countryName, setCountry] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    async function callData() {
      const data = await fetchData();
      setData(data)
    }
    callData()
  }, [])

  return (
    <>
      <div className='home'>
        <SearchCountry setCountry={setCountry} region={region} setRegion={setRegion} />
        <Countries data={data} countryName={countryName} region={region} />
      </div>
    </>
  )
}

export default Home