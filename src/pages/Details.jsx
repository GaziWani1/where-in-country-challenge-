import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import DetailCard from '../Components/DetailCard';

const Details = () => {

  const { name } = useParams();
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    const getCountry = async () => {
      const data = await fetchData();
      const country = data.filter((item) => item.name.toLowerCase() === name)
      setCountryData(country)
    }
    getCountry()
  }, [name])

  return (
    <div className='details'>
      <div>
        <Link className='btn-back' to='/'>Back</Link>
      </div>
      {countryData.map((country, index) => {
        return <DetailCard key={index} country={country} />
      })}
    </div>
  )
}

export default Details