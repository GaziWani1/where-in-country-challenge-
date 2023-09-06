import React from 'react'

const DetailCard = ({ country }) => {
    return (
        <div className='detail-card' >

            <img src={country.flag} alt="" />
            
            <div className='card-content'>
                <h2>{country.name}</h2>
                <div className='detail-info'>
                    <div>
                        <p>Native Name:{country.nativeName}</p>
                        <p>Population:{country.popluation}</p>
                        <p>Region:{country.region}</p>
                        <p>subregion:{country.subregion}</p>
                        <p>Capital:{country.capital}</p>
                    </div>
                    <div>
                        <p>Top Level Domain:{country.topLevelDomain[0]}</p>
                        <p>Currencies:{country.currencies[0].code}</p>
                        <p>Languages:{country.languages[0].name},{country.languages[0].nativeName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard